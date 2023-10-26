import express from "express";
import { addCard, getCards, getCard } from "../controllers/cards";

const router = express.Router();

router.post("/", addCard);
router.get("/", getCards);
router.get("/:id", getCard);

export default router;