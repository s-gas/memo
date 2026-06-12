package main

import (
	"encoding/json"
	"log"
	"net/http"

	"github.com/s-gas/memo/memo-server/internal/db"
)

func (s *Server) handleRegister(w http.ResponseWriter, r *http.Request) {
	log.Printf("%s %s\n", r.Method, r.URL.Path)
	var credentials db.Credentials
	if err := json.NewDecoder(r.Body).Decode(&credentials); err != nil {
		log.Println("error:", err.Error())
		http.Error(w, "invalid body", http.StatusBadRequest)
		return
	}
	if err := db.CreateUser(r.Context(), s.pool, credentials); err != nil {
		log.Println("error:", err.Error())
		http.Error(w, "internal server error", http.StatusInternalServerError)
		return
	}
	w.WriteHeader(http.StatusCreated)
}
