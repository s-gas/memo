
package main

import (
	"net/http"
	"log"
)

func (s *Server) handleRegister(w http.ResponseWriter, r *http.Request) {
	log.Printf("%s %s\n", r.Method, r.URL.Path)
	w.WriteHeader(http.StatusOK)
}
