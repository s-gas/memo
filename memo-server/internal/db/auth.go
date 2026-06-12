package db

import (
	"context"
	"fmt"

	"github.com/jackc/pgx/v5/pgxpool"
)

type Credentials struct {
	Username string `json:"username"`
	Password string `json:"password"`
}

func CreateUser(ctx context.Context, pool *pgxpool.Pool, credentials Credentials) error {
	_, err := pool.Exec(ctx, `
		INSERT INTO users (username, password)
		VALUES ($1, $2)
	`, credentials.Username, credentials.Password)
	if err != nil {
		return fmt.Errorf("CreateUser: %w", err)
	}
	return nil
}
