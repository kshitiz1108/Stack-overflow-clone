import express from "express";

import { AskQuestion } from "../controller/Questions.js";
import auth from "../middleware/auth.js";
import { getAllquestions } from "../controller/Questions.js";
import { deletequestion } from "../controller/Questions.js";
import { voteQuestion } from "../controller/Questions.js";


const router = express.Router();

router.post("/Ask",auth, AskQuestion);
router.get("/get" , getAllquestions)
router.delete("/delete/:id" ,auth , deletequestion)
router.patch("/vote/:id", auth , voteQuestion);

export default router;
