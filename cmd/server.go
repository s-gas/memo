package main

import (
	"net/http"
	"fmt"
	"log"
)

type Server struct {
	config Config
	mux		*http.ServeMux
}

type Config struct {
	Port int
}

func NewServer(c Config) *Server {
	mux := http.NewServeMux()

	s := &Server{
		config: c,
		mux: mux,
	}
	
	s.mux.HandleFunc("POST /v1/auth/register", s.handleRegister)

	return s
}

func (s *Server) handleRegister(w http.ResponseWriter, r *http.Request) {
	fmt.Println("register endpoint hit")
}

func (s *Server) Run() error {
	addr := fmt.Sprintf(":%v", s.config.Port)
	log.Printf("memo listening at %v\n", addr)
	if err := http.ListenAndServe(addr, s.mux); err != nil {
		return fmt.Errorf("Run: %w", err)
	}
	return nil
}
