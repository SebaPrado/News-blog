const express = require("express");
const router = express.Router();
const articleController = require("../controllers/articleController");
const ensureIsAuthenticated = require("../middlewares/ensureIsAuthenticated");
const escritor = require("../middlewares/escritor");
const admin = require("../middlewares/admin");

// Rutas relacionadas a los artículos:
// ...

router.get("/", articleController.index);
router.get("/crear", ensureIsAuthenticated, escritor, articleController.create);
router.get("/:id", articleController.show);
router.use(ensureIsAuthenticated); // todas las rutas para abajo quedan protegidas
router.post("/", admin, articleController.store);
router.delete("/:id", admin, articleController.destroy);
router.get("/editar/:id", admin, articleController.edit);
router.patch("/:id", articleController.update);

module.exports = router;
