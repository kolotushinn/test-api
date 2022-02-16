import mongoose from "mongoose";

const { Schema, model } = mongoose;

const RoleSchema = new Schema({
    value: { type: String, unique: true, default: "USER" },
},
    {
        timestamps: true
    }
);

export default model("Role", RoleSchema);
