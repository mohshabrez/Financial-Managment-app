import { Income } from "../model/income.model.js"

const getAllIncome = async (req, res) => {
  try {
    const getIncomes = await Income.find({});
    return res.status(200).json(getIncomes);
  } catch (error) {
    return res.status(500).json({
      message: "Error occured while getting all Incomes",
      error: error.message,
    });
  }
};

const addIncome = async (req, res) => {
  try {
    const addIncomeData = req.body;
    if (!addIncomeData) {
      res
        .status(400)
        .json({ message: "Please enter the body data to updated and added" });
    } else {
      const newIncome = new Income(addIncomeData);
      const savedIncome = await newIncome.save();
      return res
        .status(200)
        .json({ data: savedIncome, message: "Data added successfully" });
    }
  } catch (error) {
    res.status(500).json({
      message: "Error occured while adding the Income",
      error: error.message,
    });
  }
};

export { addIncome, getAllIncome };
