package main

import "fmt"

func main() {
	config := Config{
		Port: 8080,
	}
	server := NewServer(config)
	fmt.Println(server.Config.Port)
}
