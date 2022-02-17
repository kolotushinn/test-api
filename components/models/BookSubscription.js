import mongoose from "mongoose";

const { Schema, model } = mongoose;

const BookSubscriptionSchema = new Schema({
    name: { type: String, required: true },
    price: { type: Number, default: 50 },
    users: [{ type: Schema.Types.ObjectId, ref: "User" }],
    status: { type: Boolean, default: true }
},
    {
        timestamps: true,
    }
);

export default model("BookSubscription", BookSubscriptionSchema);
