const Register = () => {

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("submit");
  }

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username
            <input type="text" name="username" />
          </label>
        </div>
        <div>
          <label>Email
            <input type="email" name="email" />
          </label>
        </div>
        <div>
          <label>Password
            <input type="password" name="password" />
          </label>
        </div>
        <div>
          <label>Confirm Password
            <input type="password" name="confirm-password" />
          </label>
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  )
}

export default Register
