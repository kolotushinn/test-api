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

// * @route   GET http://localhost:5000/api/crm/users/:_id
// * @desc    Get User By ID
// * @access  Private
router.get(
    "/:_id",
    authMiddleware,
    roleMiddleware(["MANAGER", "ADMIN"]),
    usersController.getUserById
);

// * @route   DELETE http://localhost:5000/api/crm/users/delete/:_id
// * @desc    Delete user by ID
// * @access  Private
router.delete(
    "/delete/:_id",
    authMiddleware,
    roleMiddleware(["MANAGER", "ADMIN"]),
    usersController.deleteUser
);

export default router;
