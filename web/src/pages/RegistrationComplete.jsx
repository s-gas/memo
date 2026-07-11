import { Link } from 'react-router-dom'

const RegistrationComplete = () => {
 return (
   <div className="page">
    <h1>Account created successfully!</h1>
    <p>Go to <Link to="/login">log in</Link></p>
   </div>
  )
}

export default RegistrationComplete
