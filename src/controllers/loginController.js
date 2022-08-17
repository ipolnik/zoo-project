const bcrypt = require('bcrypt');

const renderTemplate = require('../lib/renderTemplate');
const Login = require('../views/Login');
const { Admin } = require('../../db/models');

const renderLogin = (req, res) => {
  const admin = req.session?.admin;
  renderTemplate(Login, { admin }, res);
};

const loginAdmin = async (req, res) => {
  const { login, password } = req.body;
  try {
    const admin = await Admin.findOne({ where: { login } });
    const passCheck = await bcrypt.compare(password, admin.password);
    if (passCheck) {
      req.session.admin = admin.login;
      req.session.save(() => {
        res.sendStatus(200);
      });
    }
  } catch (error) {
    res.sendStatus(304);
  }
};

module.exports = { renderLogin, loginAdmin };
