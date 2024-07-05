const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// Rutas relacionadas a los usuarios:
// ...

router.get("/", userController.index);
router.get("/crear", userController.create);
router.post("/", userController.store); // <=======
router.get("/:id", userController.show);
router.get("/editar/:id", userController.edit);
router.patch("/:id", userController.update);
router.delete("/:id", userController.destroy);

module.exports = router;
