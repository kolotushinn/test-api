// Import Engine
import { Router } from "express";

// Import Controllers
import userController from "./usersController.js";

// Initialize Express Router
const router = Router();

// * @route   POST http://localhost:5000/api/client/users/registration
// * @desc    User registration
// * @access  Public
router.get("/registration", userController.registration);

export default router;
