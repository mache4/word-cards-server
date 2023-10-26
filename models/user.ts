import mongoose from "mongoose";
import { cardSchema } from "./card";

export const userSchema = new mongoose.Schema({
    id: String,
    email: String,
    password: Number,
    username: String,
    cards: [cardSchema],
    createdAt: Date
});

const User = mongoose.model("users", userSchema);

export default User;