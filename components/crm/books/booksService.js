// Import Models
import BookModel from "../../models/Book.js";

// Import Exceptions
import ApiError from "../../../exceptions/apiError.js";


class BooksService {
    async create(name, author, req, res) {
        const book = await BookModel.findOne({ name });

        if (book) {
            return res.status(400).json({ response: "Book Name Already Exists!" });
        }

        const newBook = await BookModel.create({ name, author });

        return { newBook };
    }
}

export default new BooksService();
