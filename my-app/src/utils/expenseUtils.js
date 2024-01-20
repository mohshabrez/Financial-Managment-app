export const expenseCategories = [
    "Select Category",
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
]

export const validateExpense = (expenseData) => {
    const {description, amount, category} = expenseData
    if( !description || !amount || !category){
        return false;
    }
    return true
}