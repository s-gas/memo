
package main

import (
	"net/http"
	"encoding/json"
	"log"
	"fmt"
)

type Credentials struct {
	Username string `json:"username"`
	Password string	`json:"password"`
}

func (s *Server) handleRegister(w http.ResponseWriter, r *http.Request) {
	log.Printf("%s %s\n", r.Method, r.URL.Path)
	var credentials Credentials
	if err := json.NewDecoder(r.Body).Decode(&credentials); err != nil {
		log.Println("error:", err.Error())
		http.Error(w, "invalid body", http.StatusBadRequest)
		return
	}
	fmt.Println(credentials.Username)
	fmt.Println(credentials.Password)
	w.WriteHeader(http.StatusCreated)
}
