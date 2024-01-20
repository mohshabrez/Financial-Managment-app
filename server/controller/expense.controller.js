import { Expense } from "../model/expense.model.js"

const getAllExpense = async (req, res) => {
  try {
    const getExpense = await Expense.find({});
    return res.status(200).json(getExpense);
  } catch (error) {
    return res.status(500).json({
      message: "Error occured while getting all Exoenses",
      error: error.message,
    });
  }
};

const addExpense = async (req, res) => {
  try {
    const expenseData = req.body;
    const newExpense = new Expense(expenseData);
    const savedExpense = await newExpense.save();
    console.log(savedExpense);
    return res.status(200).json({ data: savedExpense });
  } catch (error) {
    return res.status(500).json({
      message: "Error occured while adding the expense",
      error: error.message,
    });
  }
};

export { getAllExpense, addExpense };
