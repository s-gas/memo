const express = require('express')
const cors = require('cors')
const app = express();

//middlewares
app.use(cors());
app.use(express.json());

let users = [];

app.post('/v1/auth/register', (req, res) => {
  const newUser = req.body;
  if (!newUser.username || !newUser.email || !newUser.password) {
    res.status(400).json({error: "All fields are required"});
    return;
  }
  if (users.find((user) => user.email === newUser.email)) {
    res.status(409).json({error: "Email already in use"});
    return;
  }
  if (users.find((user) => user.username === newUser.username)) {
    res.status(409).json({error: "Username already exists"});
    return;
  }
  users = users.concat(newUser);
  res.json(req.body);
});

const port = 3000;

app.listen(port, () => {
  console.log(`server listening on :${port}`);
})
