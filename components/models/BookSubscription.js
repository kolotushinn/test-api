import mongoose from "mongoose";

const { Schema, model } = mongoose;

const BookSubscriptionSchema = new Schema({
    price: { type: Number, default: 50 },
    user: { type: Schema.Types.ObjectId, ref: "User" },
    status: { type: Boolean, default: true }
},
    {
        timestamps: true,
    }
);

export default model("BookSubscription", BookSubscriptionSchema);
