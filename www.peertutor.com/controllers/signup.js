const express = require('express');
const models = require('../models');

module.exports = {
  registerRouter() {
    const router = express.Router();

    router.get('/', this.index);
    router.post('/', this.submit);

    return router;
  },
  index(req, res) {
    //res.render('sign-up');
      //res.send('error');
      res.redirect('/');
  },
  submit(req, res) {
      models.user.create({
          fname: req.body.fname,
          lname: req.body.lname,
          email: req.body.email,
          password: req.body.password,
      }).then((user) => {
          res.render('homepage', {signup_success: true, SignUpResultMessage: "Your registration was successful!"});
      }).catch(() => {
          //res.render('sign-up');
          res.render('homepage', {signup_failed: true, SignUpResultMessage: "Error, this email already exists."});
      });
  },
};
