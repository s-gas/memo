package db

import (
	"context"
	"fmt"
	"os"

	"github.com/jackc/pgx/v5/pgxpool"
)

func Connect(ctx context.Context) (*pgxpool.Pool, error) {
	url, err := generateUrl()
	if err != nil {
		return nil, fmt.Errorf("Connect: %w", err)
	}
	pool, err := pgxpool.New(ctx, url)
	if err != nil {
		return nil, fmt.Errorf("Connect: %w", err)
	}
	if err = createTables(ctx, pool); err != nil {
		return nil, fmt.Errorf("Connect: %w", err)
	}
	return pool, nil
}

func generateUrl() (string, error) {
	user := os.Getenv("POSTGRES_USER")
	password, err := os.ReadFile("/run/secrets/postgres_password")
	if err != nil {
		return "", fmt.Errorf("generateUrl: %w\n", err)
	}
	db := os.Getenv("POSTGRES_DB")
	url := fmt.Sprintf("postgres://%s:%s@postgres:5432/%s", user, password, db)
	return url, nil
}
