// Import Engine
import { Router } from "express";

// Import Controllers
import usersController from "./usersController.js";

// Import Middlewares
import authMiddleware from "../../../middlewares/authMiddleware.js";

// Initialize Express Router
const router = Router();

// * @route   POST http://localhost:5000/api/client/users/registration
// * @desc    User registration
// * @access  Public
router.post("/registration", usersController.registration);

// * @route   POST http://localhost:5000/api/client/users/login
// * @desc    User login
// * @access  Public
router.post("/login", usersController.login);

// * @route   POST http://localhost:5000/api/client/users/settings
// * @desc    User settings
// * @access  Private
router.put("/settings", authMiddleware, usersController.settings);

export default router;
