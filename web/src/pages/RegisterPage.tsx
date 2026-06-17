import RegisterForm from '../components/RegisterForm'
import LoginLink from '../components/LoginLink'

function RegisterPage() {
  return (
    <div className="auth">
      <h2>Register</h2>
      <RegisterForm/>
      <LoginLink/>
    </div>
  )
}

export default RegisterPage
