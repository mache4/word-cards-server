import Card from "../models/card";

export const addCard = async (req, res) => {
    const { id, title, image, words, numOfWords, language, createdAt } = req.body;

    try {
        const result = await Card.create({ id, title, image, words, numOfWords, language, createdAt });
        res.status(201).json({ result });
    } catch (error) {
        res.status(500).json({ message: "Something went wrong" });
        console.log(error);
    }
};

export const getCards = async (req, res) => {
    try {
        const records = await Card.find();
        res.status(200).json(records);
    } catch (error) {
        res.status(404).json({ message: "Something went wrong" });
    }
};

export const getCard = async (req, res) => {
    const { id } = req.params;

    try {
        const records = await Card.findById(id);
        res.status(200).json(records);
    } catch (error) {
        res.status(404).json({ message: "Something went wrong" });
    }
};