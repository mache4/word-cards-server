import mongoose from "mongoose";
import { wordSchema } from "./word";

export const cardSchema = new mongoose.Schema({
    id: String,
    title: String,
    image: String,
    words: [wordSchema],
    numOfWords: Number,
    language: String,
    createdAt: Date
    // creator: userSchema
});

const Card = mongoose.model("cards", cardSchema);

export default Card;