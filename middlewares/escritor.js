function escritor(req, res, next) {
  if (req.user.role.code >= 200) {
    next();
  } else {
    res.send("No tienes permiso suficiente, contacte al administrador");
  }
}

module.exports = escritor;
