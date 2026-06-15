package db

import (
	"context"
	"fmt"

	"github.com/jackc/pgx/v5/pgxpool"
)

func createTables(ctx context.Context, pool *pgxpool.Pool) error {
	_, err := pool.Exec(ctx, `
		CREATE TABLE IF NOT EXISTS users (
			id 				SERIAL PRIMARY KEY,
			username	TEXT NOT NULL UNIQUE,
			password	TEXT NOT NULL
		)`)
	if err != nil {
		return fmt.Errorf("createTables: %w", err)
	}
	return nil
}
