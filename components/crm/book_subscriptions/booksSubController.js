// Import Services
import booksSubService from "./booksSubService.js";

// Import Exceptions
import ApiError from "../../../exceptions/apiError.js";

// Import Validate For Forms
import validateBookSubInput from "../../../utils/validation/booksSub/create.js";

class BooksController {
    // * @route   POST http://localhost:5000/api/crm/book-subscriptions/create
    // * @desc    Create New Book Subscription
    // * @access  Private
    async create(req, res, next) {
        try {
            const { errors, isValid } = validateBookSubInput(req.body);

            // Validation
            if (!isValid) {
                return next(ApiError.BadRequest("Validations Error!", errors));
            }

            const { name, price } = req.body;

            const bookSubData = await booksSubService.create(name, price, req, res);

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
