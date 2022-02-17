// Import Models
import BookSubscriptionModel from "../../models/BookSubscription.js";

// Import Exceptions
import ApiError from "../../../exceptions/apiError.js";


class BooksService {
    async create(name, price, req, res) {
        const bookSub = await BookSubscriptionModel.findOne({ name });

        if (bookSub) {
            return res.status(400).json({ response: "Name Book Subscrption Already Exists!" });
        }

        const newBookSub = await BookSubscriptionModel.create({
            name,
            price
        });

        return { newBookSub };
    }
}

export default new BooksService();
