import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useSelector } from "react-redux";
import randomColor from "randomcolor";

ChartJS.register(ArcElement, Tooltip, Legend);

export const CustomChart = ({ reportType }) => {
  const expenses = useSelector((state) => state.expenseState.expenses);
  const incomes = useSelector((state) => state.incomeState.incomes);

  let data = {};

  if (reportType === "income") {
    const chartColors = incomes.map(() =>
      randomColor({ luminosity: "light", format: "hex" })
    );

    const totalIncome = incomes.reduce(
      (total, curr) => (total += curr.amount),
      0
    );

    const totalExpense = expenses.reduce(
      (total, curr) => (total += curr.amount),
      0
    );

    data = {
      labels: ["Income", "Expense"],
      datasets: [
        {
          label: "Amount",
          data: [totalIncome, totalExpense],
          backgroundColor: chartColors,
          borderColor: "#000000",
          borderWidth: 1,
        },
      ],
    };
  }

  if (reportType === "expense") {
    const chartColors = expenses.map(() =>
      randomColor({ luminosity: "light", format: "hex" })
    );

    const distinctBreakdown = expenses.reduce((acc, curr) => {
      if (!acc[curr.category]) {
        acc[curr.category] = curr.amount;
      } else {
        acc[curr.category] += curr.amount;
      }
      return acc;
    }, {});

    data = {
      labels: Object.keys(distinctBreakdown),
      datasets: [
        {
          label: "Amount",
          data: Object.values(distinctBreakdown),
          backgroundColor: chartColors,
          borderColor: "#000000",
          borderWidth: 1,
        },
      ],
    };
  }

  return (
    <div className="max-w-[100%] md:max-w-[500px] flex flex-col items-center gap-2">
      <h3>
        {reportType === "income"
          ? "Income vs Expense Report"
          : "Expense Breakdown Report"}
      </h3>

      <Pie data={data} />
    </div>
  );
};
