import { Savings } from "../model/savings.model.js"

const getAllSavings = async (req, res) => {
  try {
    const getSavings = await Savings.find({});
    res.status(200).json(getSavings);
  } catch (error) {
    res.status(500).json({
      message: "Error occured while trying to get all savings",
      error: error.message,
    });
  }
};

const addSavings = async (req, res) => {
  try {
    const addNewSavings = req.body;
    if (!addNewSavings) {
      res.status(400).json({ message: "Please enter the all details of body" });
    } else {
      const addNewSave = new Savings(addNewSavings);
      const saveNew = await addNewSave.save();
      console.log(saveNew);
      return res
        .status(200)
        .json({ data: saveNew, message: "Saved a new data" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error occuered while adding the new savings" });
  }
};

export { getAllSavings, addSavings };
