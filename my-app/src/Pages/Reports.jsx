import { CustomChart } from "../Components/CustomChart";

export const Reports = () => {
  return (
    <div className="p-4 flex flex-col gap-4 items-center text-white">
      <h2>Reports:</h2>

      <div className="h-max flex flex-col md:flex-row justify-center items-center">
        <CustomChart reportType="income" />
        <CustomChart reportType="expense" />
      </div>
    </div>
  );
};
