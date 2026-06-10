package main

import (
	"net/http"
	"log"
)

func (s *Server) handleHealth(w http.ResponseWriter, r *http.Request) {
	log.Printf("%s %s\n", r.Method, r.URL.Path)
	w.WriteHeader(http.StatusOK)
}
