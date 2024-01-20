import express from "express"

const router = express.Router();

import {
  getAllSavings,
  addSavings,
} from "../controller/savings.controller.js"

router.route("/").get(getAllSavings).post(addSavings);

export default router;
