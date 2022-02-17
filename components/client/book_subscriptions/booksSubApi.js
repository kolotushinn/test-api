// Import Engine
import { Router } from "express";

// Import Controllers
import booksSubController from "./booksSubController.js";

// Import Middlewares
import authMiddleware from "../../../middlewares/authMiddleware.js";

// Initialize Express Router
const router = Router();

// * @route   POST http://localhost:5000/api/client/book-subscriptions/subscribe/:_id
// * @desc    Subscribe
// * @access  Private
router.post(
    "/subscribe/:_id",
    authMiddleware,
    booksSubController.subscribe
);

export default router;
