// Import Services
import booksService from "./booksService.js";

// Import Exceptions
import ApiError from "../../../exceptions/apiError.js";

class BooksController {
    // * @route   POST http://localhost:5000/api/client/books/add/:_id
    // * @desc    Add New Book
    // * @access  Private
    async addNewBook(req, res, next) {
        try {
            const bookData = await booksService.addNewBook(req, res);

            return res.status(200).json({
                statusCode: 200,
                stringStatus: "OK, Success",
                message: bookData
            });
        } catch(err) {
            next(err);
        }
    }

    // * @route   POST http://localhost:5000/api/client/books/return/:_id
    // * @desc    Return Book
    // * @access  Private
    async returnBook(req, res, next) {
        try {
            const bookData = await booksService.returnBook(req, res);

            return res.status(200).json({
                statusCode: 200,
                stringStatus: "OK, Success",
                message: bookData
            });
        } catch(err) {
            next(err);
        }
    }
}

export default new BooksController();
