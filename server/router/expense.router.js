import express from "express"

const router = express.Router();

import {
  getAllExpense,
  addExpense,
} from "../controller/expense.controller.js"

router.route("/").get(getAllExpense).post(addExpense);

export default router;
