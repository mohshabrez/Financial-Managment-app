export const IncomeCategories = [
    "Select Category",
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
]

export const validateIncome = (incomeData) => {
    console.log(incomeData)
    const { category, amount, description} = incomeData
    if(!category || !amount || !description){
        return false;
    }
    return true;
}

