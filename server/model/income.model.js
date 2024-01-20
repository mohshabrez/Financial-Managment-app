import mongoose from "mongoose"

const incomeSchema = new mongoose.Schema(
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
        "Investment",
        "Partnership",
        "Rental Income",
        "Capital Gain",
        "Commission",
        "Dividend",
        "Gratuity",
        "Interest",
        "Freelance Income",
        "Pension",
        "Salary",
      ],
      default: "Salary",
    },
    date: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true },
);

const Income = mongoose.model("Income", incomeSchema);

export  { Income };
