package main

import (
	"encoding/json"
	"log"
	"errors"
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
	err := db.CreateUser(r.Context(), s.pool, credentials)
	if errors.Is(err, db.ErrUsernameAlreadyExists) {
		log.Println("error:", err.Error())
		http.Error(w, "username already exists", http.StatusConflict)
		return
	}
	if err != nil {
		log.Println("error:", err.Error())
		http.Error(w, "internal server error", http.StatusInternalServerError)
		return
	}
	w.WriteHeader(http.StatusCreated)
}
