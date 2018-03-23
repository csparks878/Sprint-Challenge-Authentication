const User = require('../models/userModels');
const bcrypt = require('bcrypt');

const createUser = (req, res) => {
  const { username, password } = req.body;
  console.log(username, password);
  // create user takes in the username and password and saves a user.
  // our pre save hook should kick in here saving this user to the DB with an encrypted password.
  const newUser = User({
    username: username,
    password: password,
  })
  
  newUser.save()
  .then(response => console.log(response))
  .catch(err => console.log(err));
};

module.exports = {
  createUser
};
