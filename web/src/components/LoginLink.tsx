import { Link } from "react-router-dom"

function LoginLink() {
  return (
    <div className="authLink">
      <p>Already have an account?</p>
      <Link to="/">Login</Link>
    </div>
  )
}

export default LoginLink
