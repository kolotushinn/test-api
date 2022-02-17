// Import Engine
import { Router } from "express";

// Import Controllers
import booksController from "./booksController.js";

// Import Middlewares
import authMiddleware from "../../../middlewares/authMiddleware.js";
import roleMiddleware from "../../../middlewares/roleMiddleware.js";

// Initialize Express Router
const router = Router();

// * @route   POST http://localhost:5000/api/crm/books/create
// * @desc    Create New Book
// * @access  Private
router.post(
    "/create",
    authMiddleware,
    roleMiddleware(["MANAGER", "ADMIN"]),
    booksController.create
);

export default router;
