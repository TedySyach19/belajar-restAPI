const express = require("express");

const userControllers = require("../controller/users.js");

const router = express.Router();

// Create user dummy - POST
router.post("/", userControllers.createNewUsers);

// Read user dummy - GET
router.get("/", userControllers.getAllUsers);

// Update user dummy - PATCH
router.patch("/:idUser", userControllers.updateUser);

// Delete user dummy - DELETE
router.delete("/:idUser", userControllers.deleteUser);

module.exports = router;

// CARA PEMANGGILANYA ADA DI index.js
