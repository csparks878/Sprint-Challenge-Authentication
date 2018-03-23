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
  .then(response => {
    res.status(200);
    res.send(`The user was saved`);
  })
  .catch(err => {
    res.status(500);
    res.send(`There was an error on the server`);
  });
};

module.exports = {
  createUser
};
