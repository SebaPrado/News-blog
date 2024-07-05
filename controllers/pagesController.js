/**
 * Este archivo se utiliza en un proyecto donde se está utlizando server-side
 * rendering (ej: con un motor de templates como EJS). Tiene como objetivo
 * mostrar (renderear) páginas que no están directamente relacionandas con
 * una entidad del proyecto.
 *
 * Ejemplos:
 *   - Página de inicio (Home).
 *   - Página de contacto.
 *   - Página con política de privacidad.
 *   - Página con términos y condiciones.
 *   - Página con preguntas frecuentes (FAQ).
 *   - Etc.
 *
 * En caso de estar creando una API, este controlador carece de sentido y
 * no debería existir.
 */

const { Article, User } = require("../models");

async function showHome(req, res) {
  const articles = await Article.findAll({ include: User });
  return res.render("home", { articles });
}

async function showAdmin(req, res) {
  const user = req.user;
  const articles = await Article.findAll({ include: User });
  return res.render("admin", { articles, user });
}

async function showLogin(req, res) {
  return res.render("loginForm");
}

async function showRegister(req, res) {
  return res.render("registerForm");
}

/* async function showAboutUs(req, res) {
  const articles = await Article.findAll({ include: User });
  res.render("create-article", { articles });
} */

async function editArticles(req, res) {
  /* const articles = await Article.findAll({ include: User });
  const id = req.params.id;
  const article = await Article.findByPk(id);
  res.render("edit-article", { article, articles }); */
}

async function createArticle(req, res) {
  /* const articles = await Article.findAll({ include: User });
  res.render("create-article", { articles }); */
}

module.exports = {
  showHome,
  showAdmin,
  showLogin,
  showRegister,
  /* showAboutUs, */
  editArticles,
  createArticle,
};
