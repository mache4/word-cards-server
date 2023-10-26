import express from "express";
import { addUser, getUser, getUsers } from "../controllers/users";

const router = express.Router();

router.post("/", addUser);
router.get("/", getUsers);
router.get("/:id", getUser);

export default router;