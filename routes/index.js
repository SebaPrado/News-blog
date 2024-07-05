
const userRoutes = require("./userRoutes");
const articleRoutes = require("./articleRoutes");
const commentRoutes = require("./commentRoutes");
const authRoutes = require("./authRoutes");

const publicRoutes = require("./publicRoutes");
const privateRoutes = require("./privateRoutes");

module.exports = (app) => {

  app.use("/usuarios", userRoutes);
  app.use("/articulos", articleRoutes);
  app.use("/comentarios", commentRoutes);
  app.use("/", authRoutes);

  app.use("/", publicRoutes);
  app.use("/admin", privateRoutes);
};

/**
 * No hay una única forma de organizar las rutas de un sitio web.
 * Una alternativa podría ser organizar las rutas por entidad:
 */

/**
 * Otra alternativa podría ser organiar las rutas según su nivel de
 * privacidad (ej: si son rutas públicas o privadas).
 *
 * En `publicRoutes` podrían estar las rutas relacionadas con páginas como
 * Home, Contacto y Sobre Nosotros. En `privateRoutes` podrían estar las rutas
 * relacionados al Panel de Control (Admin). Notar que si se está construyendo
 * una API esta alternativa no tendría sentido.
 */