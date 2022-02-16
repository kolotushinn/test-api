import mongoose from "mongoose";

const { Schema, model } = mongoose;

const UserSchema = new Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    balance: { type: Number, default: 0 },
    bookSubscription: { type: Boolean, default: false },
    linkBookSubscription: { type: Schema.Types.ObjectId, ref: "BookSubscription" },
    books: [{ type: Schema.Types.ObjectId, ref: "Book", max: 5 }],
    roles: [{ type: String, ref: "Role" }],
},
    {
        timestamps: true
    }
);

export default model("User", UserSchema);
