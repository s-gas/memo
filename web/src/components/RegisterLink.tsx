import { Link } from "react-router-dom"

function RegisterLink() {
  return (
    <div className="authLink">
      <p>Don't have an account?</p>
      <Link to="/register">Register</Link>
    </div>
  )
}

export default RegisterLink
