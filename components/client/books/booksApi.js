// Import Engine
import { Router } from "express";

// Import Controllers
import booksController from "./booksController.js";

// Import Middlewares
import authMiddleware from "../../../middlewares/authMiddleware.js";

// Initialize Express Router
const router = Router();

// * @route   POST http://localhost:5000/api/client/books/add/:_id
// * @desc    Add New Book
// * @access  Private
router.post(
    "/add/:_id",
    authMiddleware,
    booksController.addNewBook
);

// * @route   POST http://localhost:5000/api/client/books/return/:_id
// * @desc    Return Book
// * @access  Private
router.post(
    "/return/:_id",
    authMiddleware,
    booksController.returnBook
);

export default router;
