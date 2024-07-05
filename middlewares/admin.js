function admin(req, res, next) {
  if (req.user.role.code >= 300) {
    next();
  } else {
    res.send("No tienes permiso suficiente, contacte al administrador");
  }
}

module.exports = admin;
