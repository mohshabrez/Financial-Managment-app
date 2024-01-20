import mongoose from "mongoose"

const expenseSchema = new mongoose.Schema(
  {
    description: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      enum: [
        "Rent",
        "Transportation",
        "Utilities",
        "Entertainment",
        "Home Insurance",
        "Life Insurance",
        "Health Insurance",
        "Car Insurance",
        "Housing",
        "Groceries",
        "Dining Out",
        "Travel",
        "Others",
      ],
      default: "Others",
    },
    date: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true },
);

const Expense = mongoose.model("Expense", expenseSchema);

export { Expense };
