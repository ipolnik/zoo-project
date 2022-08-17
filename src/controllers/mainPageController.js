const renderTemplate = require('../lib/renderTemplate');
const Layout = require('../views/Layout');

const renderHome = (req, res) => {
  const admin = req.session?.admin;
  renderTemplate(Layout, {admin}, res);
};

module.exports = { renderHome };
