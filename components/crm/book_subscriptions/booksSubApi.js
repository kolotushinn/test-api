// Import Engine
import { Router } from "express";

// Import Controllers
import booksSubController from "./booksSubController.js";

// Import Middlewares
import authMiddleware from "../../../middlewares/authMiddleware.js";
import roleMiddleware from "../../../middlewares/roleMiddleware.js";

// Initialize Express Router
const router = Router();

// * @route   POST http://localhost:5000/api/crm/book-subscriptions/create
// * @desc    Create New Book Subscription
// * @access  Private
router.post(
    "/create",
    authMiddleware,
    roleMiddleware(["MANAGER", "ADMIN"]),
    booksSubController.create
);

export default router;
