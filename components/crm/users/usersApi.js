// Import Engine
import { Router } from "express";

// Import Controllers
import usersController from "./usersController.js";

// Import Middlewares
import authMiddleware from "../../../middlewares/authMiddleware.js";
import roleMiddleware from "../../../middlewares/roleMiddleware.js";

// Initialize Express Router
const router = Router();

// * @route   GET http://localhost:5000/api/crm/users/all
// * @desc    Get All Users
// * @access  Private
router.get(
    "/all",
    authMiddleware,
    roleMiddleware(["MANAGER", "ADMIN"]),
    usersController.getAllUsers
);

export default router;
