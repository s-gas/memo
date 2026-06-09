package main

import "log"

func main() {
	config := Config{
		Port: 8080,
	}
	server := NewServer(config)
	if err := server.Run(); err != nil {
		log.Fatal(err)
	}
}
