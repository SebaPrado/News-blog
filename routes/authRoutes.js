const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

// Rutas relacionadas a la parte autenticacion del sitio web:
// ...
router.post("/login", authController.login);
router.get("/logout", authController.logout);
// router.get("/admin", pagesController.showAdmin);
// router.get("/login", pagesController.showLogin);
// router.get("/registro", pagesController.showRegister);

/* router.get("/articles", pagesController.showAboutUs);
 */ /* router.get("/articles/edit/:id", pagesController.editArticles);
router.get("/articles/create", pagesController.createArticle); */
/* router.post("/articles/create", pagesController.createArticle); */

module.exports = router;
