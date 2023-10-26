import mongoose from "mongoose";

export const wordSchema = new mongoose.Schema({
    id: String,
    englishName: String,
    selectedLanguageName: String,
    image: String,
    createdAt: Date
});