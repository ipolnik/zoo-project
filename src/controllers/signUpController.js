const bcrypt = require('bcrypt');

const renderTemplate = require('../lib/renderTemplate');
const SignUp = require('../views/SignUp');
const { Admin } = require('../../db/models');

const renderSignUp = (req, res) => {
  renderTemplate(SignUp, null, res);
};

const createAdmin = async (req, res) => {
  try {
    const { login, password } = req.body;
    const hash = await bcrypt.hash(password, 10);
    const admin = await Admin.create({ login, password: hash });
    req.session.admin = admin.login;
    req.session.save(() => {
       res.json(admin);
      res.redirect('/')
    });
  } catch (error) {
    console.log(error, 'cant render');
  }
};

module.exports = { renderSignUp, createAdmin }; 