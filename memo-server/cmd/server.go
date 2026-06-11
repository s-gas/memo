package main

import (
	"context"
	"fmt"
	"log"
	"net/http"

	"github.com/jackc/pgx/v5/pgxpool"
)

type Server struct {
	config Config
	mux    *http.ServeMux
	pool   *pgxpool.Pool
	ctx    context.Context
}

type Config struct {
	Port int
}

func NewServer(ctx context.Context, c Config, pool *pgxpool.Pool) *Server {
	mux := http.NewServeMux()

	s := &Server{
		config: c,
		mux:    mux,
		pool:   pool,
		ctx:    ctx,
	}

	s.mux.HandleFunc("GET /v1/health", s.handleHealth)
	s.mux.HandleFunc("POST /v1/auth/register", s.handleRegister)

	return s
}

func (s *Server) Run() error {
	addr := fmt.Sprintf(":%v", s.config.Port)
	log.Printf("memo listening at %v\n", addr)
	if err := http.ListenAndServe(addr, s.mux); err != nil {
		return fmt.Errorf("Run: %w", err)
	}
	return nil
}
