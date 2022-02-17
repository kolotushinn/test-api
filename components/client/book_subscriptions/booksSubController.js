// Import Services
import booksSubService from "./booksSubService.js";

// Import Exceptions
import ApiError from "../../../exceptions/apiError.js";

class BooksController {
    // * @route   POST http://localhost:5000/api/client/book-subscriptions/subscribe/:_id
    // * @desc    Subscribe
    // * @access  Private
    async subscribe(req, res, next) {
        try {
            const bookSubData = await booksSubService.subscribe(req, res);

            return res.status(200).json({
                statusCode: 200,
                stringStatus: "OK, Success",
                message: bookSubData
            });
        } catch(err) {
            next(err);
        }
    }
}

export default new BooksController();
