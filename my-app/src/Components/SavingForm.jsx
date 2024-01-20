import { useDispatch, useSelector } from "react-redux";
import { savingsCategories } from "../utils/savingsUtils";
import { useEffect } from "react";
import { savingsInput, addNewSavings } from "../redux/actions/savingsActions";
import {  RESET_SAVINGS } from "../redux/actionConstants";

export const SavingForm = () => {
  const userInput = useSelector((state) => state.savingState.savingInput);
  const error = useSelector((state) => state.savingState.savingError);
  const dispatch = useDispatch();

  useEffect(() => {
    return function () {
      dispatch({ type: RESET_SAVINGS });
    };
  }, []);

  const handleAddExpense = () => {
    dispatch(addNewSavings(userInput));
  };

  return (
    <div>
      <h2>Add new Saving:</h2>
      <div className="flex gap-2 flex-wrap mt-2">
        <label className="flex flex-col">
          Category:
          <select
            onChange={(e) =>
              dispatch(
                savingsInput({
                  ...userInput,
                  category: e.target.value,
                })
              )
            }
            value={userInput.category}
            className="border-2 text-black outline-2 outline-blue-500 rounded-md h-max self-end px-2"
          >
            {savingsCategories.map((category) => {
              return (
                <option key={category} className="bg-blue-100">
                  {category}
                </option>
              );
            })}
          </select>
        </label>

        <label className="flex flex-col">
          Description:
          <input
            onChange={(e) =>
              dispatch(
                savingsInput({
                  ...userInput,
                  description: e.target.value,
                })
              )
            }
            value={userInput.description}
            type="text"
            placeholder="Enter Desription"
            className="border-2 text-black rounded-md max-w-[10rem] px-1 outline-2 outline-blue-500"
          />
        </label>

        <label className="flex flex-col">
          Amount:
          <input
            onChange={(e) =>
              dispatch(
                savingsInput({
                  ...userInput,
                  amount: e.target.value,
                })
              )
            }
            value={userInput.amount}
            type="number"
            placeholder="enter amount"
            className="border-2 text-black rounded-md max-w-[10rem] px-1 outline-2 outline-blue-500"
          />
        </label>

        <button
          onClick={handleAddExpense}
          className="bg-blue-500 text-white px-4 py-0.5 rounded-md hover:shadow-lg h-max self-end"
        >
          Add
        </button>
      </div>

      {error && <small className="text-red-600">{`* ${error}`}</small>}
    </div>
  );
};
