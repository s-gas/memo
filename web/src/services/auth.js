import axios from 'axios'

const baseUrl = "http://localhost:3000";

const register = (form) => {
  const user = {
    username: form.username,
    email: form.email,
    password: form.password,
  }
  const url = `${baseUrl}/v1/auth/register`;
  return axios.post(url, user)
}

export default { register }
