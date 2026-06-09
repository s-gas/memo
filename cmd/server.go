package main

type Server struct {
	Config Config
}

type Config struct {
	Port int
}

func NewServer(c Config) *Server {
	return &Server{
		Config: c,
	}
}
