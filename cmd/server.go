package main

import (
	"fmt"
	"log"
	"net/http"
)

type Server struct {
	config Config
	mux    *http.ServeMux
}

type Config struct {
	Port int
}

func NewServer(c Config) *Server {
	mux := http.NewServeMux()

	s := &Server{
		config: c,
		mux:    mux,
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
