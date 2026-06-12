package main

import (
	"context"
	"log"

	"github.com/s-gas/memo/memo-server/internal/db"
)

func main() {
	ctx := context.Background()
	pool, err := db.Connect(ctx)
	if err != nil {
		log.Fatal(err)
	}
	config := Config{
		Port: 8080,
	}
	server := NewServer(config, pool)
	if err := server.Run(); err != nil {
		log.Fatal(err)
	}
}
