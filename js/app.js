// calculate total expenses and update balance 
const calculateTotalExpenses = document.getElementById("calculate-total-expenses");
calculateTotalExpenses.addEventListener("click", function(){
    const foodCost = document.getElementById("food-cost");
    const foodCosttext = foodCost.value;
    const  totalFoodCost = parseFloat(foodCosttext);
    foodCost.value = "";

    const rentCost = document.getElementById("rent-cost");
    const rentCostText = rentCost.value;
    const totalRentCost = parseFloat(rentCostText);
    rentCost.value ="";
    
    const clothesCost = document.getElementById("cloth-cost");
    const clothesCostText = clothesCost.value;
    const totalClothesCost = parseFloat(clothesCostText);
    clothesCost.value = "";

    const countTotoalExpenses = totalFoodCost + totalRentCost + totalClothesCost;

    const updateTotalExpenses = document.getElementById("total-expenses");
    updateTotalExpenses.innerText = countTotoalExpenses;

    const incomeInputField = document.getElementById("income-input");
    const incomeInputFieldText = incomeInputField.value;
    const totalIncome = parseFloat(incomeInputFieldText);
    let updateBalance = document.getElementById("update-balance");
    
     updateBalance.innerText = totalIncome - countTotoalExpenses;

});
