// Import Models
import UserModel from "../../models/User.js";
import BookSubscriptionModel from "../../models/BookSubscription.js";
import SubscriptionsModel from "../../models/Subscriptions.js";

// Import Exceptions
import ApiError from "../../../exceptions/apiError.js";


class BooksService {
    async subscribe(req, res) {
        const subscription = await SubscriptionsModel.findOne({
            bookSub: req.params._id,
            whoSubscribe: req.user.id,
        });

        const bookSub = await BookSubscriptionModel.findOne({ _id: req.params._id });

        const user = await UserModel.findOne({ _id: req.user.id });

        if (user.balance < bookSub.price) {
            return res.status(400).json({ response: "Please, see your balance!" });
        }

        if (subscription) {
            return res.status(400).json({ response: "Subscription To BookSub Already Exists!" });
        }

        await SubscriptionsModel.create({
            bookSub: req.params._id,
            whoSubscribe: req.user.id,
        });

        await BookSubscriptionModel.updateOne(
            { _id: req.params._id },
            {
                $addToSet: {
                    users: req.user.id
                }
            }
        );

        await UserModel.updateOne(
            { _id: req.user.id },
            {
                balance: user.balance - bookSub.price,
                bookSubscription: true,
                linkBookSubscription: req.params._id
            }
        );

        const updatedBookSub = await BookSubscriptionModel.findOne({ _id: req.params._id });
        
        return { updatedBookSub }
    }
}

export default new BooksService();
