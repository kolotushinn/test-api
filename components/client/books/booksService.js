// Import Models
import UserModel from "../../models/User.js";
import BookModel from "../../models/Book.js";

// Import Exceptions
import ApiError from "../../../exceptions/apiError.js";


class BooksService {
    async addNewBook(req, res) {
        const book = await BookModel.findOne({ _id: req.params._id });

        const user = await UserModel.findOne({ _id: req.user.id });

        if (!user.bookSubscription) {
            return res.status(400).json({ response: "User Not Uses Book Subscription!" });
        }

        if (book.uses) {
            return res.status(400).json({ response: "Book Uses!" });
        }

        await BookModel.updateOne(
            { _id: req.params._id },
            {
                $set: {
                    location: "User",
                    uses: true,
                    whoUses: req.user.id
                }
            }
        );

        const updatedBook = await BookModel.findOne({ _id: req.params._id });

        return { updatedBook };
    }

    async returnBook(req, res) {
        const book = await BookModel.findOne({ _id: req.params._id });

        const user = await UserModel.findOne({ _id: req.user.id });

        if (!user.bookSubscription) {
            return res.status(400).json({ response: "User Not Uses Book Subscription!" });
        }

        if (!book.uses) {
            return res.status(400).json({ response: "Book returned!" });
        }

        await BookModel.updateOne(
            { _id: req.params._id },
            {
                $set: {
                    location: "Library",
                    uses: false,
                    whoUses: null,
                }
            }
        );

        const updatedBook = await BookModel.findOne({ _id: req.params._id });

        return { updatedBook };
    }
}

export default new BooksService();
