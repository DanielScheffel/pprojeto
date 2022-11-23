const router = require('express').Router();

router.post("/register", UserController.register);
router.post("/login", UserController.login);
router.get("/:id", UserController.getUserById);


module.exports = router;