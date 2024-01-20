import { useSelector } from "react-redux";
import { SavingForm } from "../Components/SavingForm";
import { Filters } from "../Components/Filters";

export const Savings = () => {
  const savings = useSelector((state) => state.savingState.savings);
  const loading = useSelector((state) => state.savingState.savingLoading);
  const sortMethod = useSelector((state) => state.savingState.savingSortMethod);
  const selectedCategory = useSelector(
    (state) => state.savingState.savingSelectedCategory
  );

  const applyFilters = (incomes) => {
    let filteredData = [...incomes];

    if (selectedCategory) {
      if (selectedCategory !== "Select Category") {
        filteredData = filteredData.filter(
          ({ category }) => category === selectedCategory
        );
      }
    }

    if (sortMethod) {
      filteredData.sort((a, b) => a.amount - b.amount);
    }

    return filteredData;
  };

  const filteredSavings = applyFilters(savings);

  return (
    <div className="p-4 mt-8 text-white flex flex-col gap-7 items-center">
      <SavingForm />

      <Filters type="saving" />

      <h2>All Savings:</h2>

      {loading && <h3 className="self-center">Loading...</h3>}

      {!loading && (
        <div className="w-[100%] overflow-x-scroll">
          <table className="w-[100%] text-black">
            <thead className="bg-gray-200 border-2 border-gray-300">
              <tr>
                <th className="px-2">Date</th>
                <th className="px-2">Category</th>
                <th className="px-2">Description</th>
                <th className="px-2">Amount</th>
              </tr>
            </thead>
            <tbody>
              {filteredSavings?.map((saving) => (
                <tr
                  key={saving?._id}
                  className="border-2 text-white border-gray-300 text-center"
                >
                  <td className="px-2">
                    {new Date(saving?.date).toDateString()}
                  </td>
                  <td className="px-2">{saving?.category}</td>
                  <td className="px-2">{saving?.description}</td>
                  <td className="px-2">${saving?.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};
