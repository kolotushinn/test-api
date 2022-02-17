import mongoose from "mongoose";

const { Schema, model } = mongoose;

const BookSchema = new Schema({
    name: { type: String, required: true },
    author: { type: String, required: true },
    location: { type: String, required: true, default: "Library" },
    uses: { type: Boolean, default: false },
    whoUses: { type: Schema.Types.ObjectId, ref: "User" },
},
    {
        timestamps: true,
    }
);

export default model("Book", BookSchema);
