const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const { User, Role } = require("./models");
const bcrypt = require("bcryptjs");

function passportConfig(app) {
  app.use(
    session({
      secret: "AlgúnTextoSuperSecreto",
      resave: false, // Docs: "The default value is true, but using the default has been deprecated".
      saveUninitialized: false, // Docs: "The default value is true, but using the default has been deprecated".
    }),
  );

  app.use(passport.session());

  passport.use(
    new LocalStrategy(
      {
        usernameField: "email",
        passwordField: "password",
      },
      async (email, password, validationDone) => {
        try {
          const user = await User.findOne({ where: { email: email } });
          if (!user) {
            console.log("Nombre de usuario no existe.");
            return validationDone(null, false, { message: "Credenciales incorrectas." });
          }
          const match = await bcrypt.compare(password, user.password);

          if (!match) {
            console.log("La contraseña es inválida.");
            return validationDone(null, false, {
              message: "Credenciales incorrectas. Por favor, reintentar.",
            });
          }
          console.log("Credenciales verificadas correctamente");
          return validationDone(null, user);
        } catch (error) {
          console.log(error);
          validationDone(null, false, {
            message: "Ocurrió un error inesperado. Por favor, reintentar.",
          });
        }
      },
    ),
  );

  passport.serializeUser((user, cb) => {
    cb(null, user.id);
  });
  passport.deserializeUser(async (id, cb) => {
    try {
      const user = await User.findByPk(id, { include: Role });
      cb(null, user); // Usuario queda disponible en req.user.
    } catch (err) {
      cb(err);
    }
  });
}

module.exports = passportConfig;
