package apperrors

import "errors"

var (
	UsernameAlreadyExists = errors.New("username already exists")
	InvalidCredentials = errors.New("invalid credentials")
)
