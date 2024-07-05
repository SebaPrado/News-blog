const express = require("express");
const router = express.Router();
const pagesController = require("../controllers/pagesController");
// Rutas relacionadas a la parte pública del sitio web:
// ...
router.get("/", pagesController.showHome);
router.get("/login", pagesController.showLogin);

/* router.get("/articles", pagesController.showAboutUs);
 */ /* router.get("/articles/edit/:id", pagesController.editArticles);
router.get("/articles/create", pagesController.createArticle); */
/* router.post("/articles/create", pagesController.createArticle); */

module.exports = router;
