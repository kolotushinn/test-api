import mongoose from "mongoose";

const { Schema, model } = mongoose;

const SubscriptionsSchema = new Schema({
    bookSub: { type: Schema.Types.ObjectId, ref: "BookSubscription" },
    whoSubscribe: { type: Schema.Types.ObjectId, ref: "User" },
},
    {
        timestamps: true,
    }
);

export default model("Subscriptions", SubscriptionsSchema);
