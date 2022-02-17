// Import Services
import booksService from "./booksService.js";

// Import Exceptions
import ApiError from "../../../exceptions/apiError.js";

// Import Validate For Forms
import validateBookInput from "../../../utils/validation/books/create.js";

class BooksController {
    // * @route   POST http://localhost:5000/api/crm/books/create
    // * @desc    Create New Book
    // * @access  Private
    async create(req, res, next) {
        try {
            const { errors, isValid } = validateBookInput(req.body);

            // Validation
            if (!isValid) {
                return next(ApiError.BadRequest("Validations Error!", errors));
            }

            const { name, author } = req.body;

            const bookData = await booksService.create(name, author, req, res);

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
