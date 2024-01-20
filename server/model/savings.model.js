import mongoose from "mongoose"

const savingsSchema = new mongoose.Schema(
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
        "Emergency Fund",
        "Retirement",
        "Medical",
        "Education",
        "Home Purchase",
        "Car Purchase",
        "Long Term",
        "Vacation",
        "Wedding",
      ],
      default: "Long Term",
    },
    date: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true },
);

const Savings = mongoose.model("Savings", savingsSchema);
export { Savings };
