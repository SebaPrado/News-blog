function ensureIsAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    res.locals.user = req.user;
    next();
  } else {
    res.redirect("/login");
  }
}

module.exports = ensureIsAuthenticated;
