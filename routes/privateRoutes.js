const express = require("express");
const router = express.Router();
const ensureIsAuthenticated = require("../middlewares/ensureIsAuthenticated");
const pagesController = require("../controllers/pagesController");

// Rutas relacionadas al panel de control (Admin):
// ...
router.get("/", ensureIsAuthenticated, pagesController.showAdmin);

module.exports = router;
