const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const config = require('config')
const { check, validationResult } = require('express-validator/check');

const User = require('../models/User');

// route : POST api/users
// desc : Resigter a user
// access : Public
router.post(
  '/',
  [
    check('name', 'Please add a name')
      .not()
      .isEmpty(),
    check('email', 'please include a valid email').isEmail(),
    check(
      'password',
      'Please enter a password with 6 or more characters'
    ).isLength({
      min: 6
    })
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { name, email, password } = req.body;
    try {
      let user = await User.findOne({ email });
      if (user) {
        res.status(400).json({ msg: 'user already exist' });
      }
      // the new user
      user = new User({
        name,
        email,
        password
      });
      // hashing password
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);
      // submit a new user to mongoDB
      await user.save();
      const payload = {
        user = {
          id : user.id
        }
      }
      // jwt.sign(payload,config.get('jwtSecret')
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

module.exports = router;