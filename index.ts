import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";

import usersRouter from "./routes/users";
import cardsRouter from "./routes/cards";

dotenv.config();

const app = express();

app.use(bodyParser.json({ limit: "30mb" }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.get("/", (req, res) => {
    res.status(200).send("cIgor");
});

app.use("/users", usersRouter);
app.use("/cards", cardsRouter);

mongoose.connect(`${process.env.MONGODB_URI}`)
    .then(() => console.log("MongoDB connected."))
    .catch((err) => console.log(err));

app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}.`);
});