export const savingsCategories = [
    "Select Category",
  "Emergency Fund",
  "Retirement",
  "Medical",
  "Education",
  "Home Purchase",
  "Car Purchase",
  "Long Term",
  "Vacation",
  "Wedding",
]

export const validateSavings = (savingsData) => {
    const { description, amount, category} = savingsData
    if(!description || !amount || !category){
        return false
    }
    return true
}