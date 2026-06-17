import LoginForm from '../components/LoginForm'
import RegisterLink from '../components/RegisterLink'

function LoginPage() {
  return (
    <div className="auth">
      <h2>Login</h2>
      <LoginForm/>
      <RegisterLink/>
    </div>
  )
}

export default LoginPage
