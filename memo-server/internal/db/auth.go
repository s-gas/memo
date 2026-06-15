package db

import (
	"context"
	"fmt"
	"errors"

	"golang.org/x/crypto/bcrypt"
	"github.com/jackc/pgx/v5/pgxpool"
	"github.com/jackc/pgx/v5/pgconn"
	"github.com/s-gas/memo/memo-server/internal/apperrors"
)

type Credentials struct {
	Username string `json:"username"`
	Password string `json:"password"`
}


func CreateUser(ctx context.Context, pool *pgxpool.Pool, credentials Credentials) error {
	hashedPassword, err := hashPassword(credentials.Password)
	if err != nil {
		return fmt.Errorf("CreateUser: %w", err)
	}
	_, err = pool.Exec(ctx, `
		INSERT INTO users (username, password)
		VALUES ($1, $2)
	`, credentials.Username, string(hashedPassword))
	if err != nil {
		var pgErr *pgconn.PgError
		if errors.As(err, &pgErr) && pgErr.Code == "23505" {
			return apperrors.UsernameAlreadyExists
		}
	}
	return nil
}

func hashPassword(password string) (string, error) {
	hashedPassword, err := bcrypt.GenerateFromPassword([]byte(password), bcrypt.DefaultCost)
	if err != nil {
		return "", fmt.Errorf("hashPassword: %w", err)
	}
	return string(hashedPassword), nil
}
