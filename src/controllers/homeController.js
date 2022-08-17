const renderTemplate = require('../lib/renderTemplate');
const Home = require('../views/Home');

const renderMain = (req, res) => {
  const admin = req.session?.admin;
  renderTemplate(Home, { admin }, res);
};

module.exports = { renderMain };
