import User from "../models/user";

export const addUser = async (req, res) => {
    const { id, email, password, username, cards, createdAt } = req.body;

    try {
        const result = await User.create({ id, email, password, username, cards, createdAt });
        res.status(201).json({ result });
    } catch (error) {
        res.status(500).json({ message: "Something went wrong" });
        console.log(error);
    }
};

export const getUsers = async (req, res) => {
    try {
        const exercises = await User.find();
        res.status(200).json(exercises);
    } catch (error) {
        res.status(404).json({ message: "Something went wrong" });
    }
};

export const getUser = async (req, res) => {
    const { id } = req.params;

    try {
        const result = await User.findById(id);
        res.status(200).json({ result });
    } catch (error) {
        res.status(500).json({ message: "Something went wrong" });
        console.log(error);
    }
};