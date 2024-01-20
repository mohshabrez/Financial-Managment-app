import express from "express"

const router = express.Router();

import { addIncome, getAllIncome } from "../controller/income.controller.js"

router.route("/").get(getAllIncome).post(addIncome);

export default router;
