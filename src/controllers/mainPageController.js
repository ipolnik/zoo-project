const renderHome = (req, res) => {
  res.redirect('/home')
 /*  const admin = req.session?.admin;
  renderTemplate(Layout, { admin }, res); */
};

module.exports = { renderHome };
