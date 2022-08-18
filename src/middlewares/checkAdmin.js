const checkAdmin = (req, res, next) => {
  if (req.session.admin === 'Admin') {
    next();
  } else {
    res.redirect('/');
  }
};

module.exports = { checkAdmin };
