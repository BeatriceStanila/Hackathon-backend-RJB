import { Router } from "express";
const router = Router();

import { getQuestions } from "../models/index.js";

router.get("/", async (req, res) => {
    //Get all 
    const questions = await getQuestions();
    console.log("questions");
    res.status(200).json({ success: true, payload: questions });
});

export default router;