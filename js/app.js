// calculate total expenses and update balance 
const calculateTotalExpensesButton = document.getElementById("calculate-total-expenses");
calculateTotalExpensesButton.addEventListener("click", function(){
    const foodCost = document.getElementById("food-cost");
    const foodCosttext = foodCost.value;
    const  totalFoodCost = parseFloat(foodCosttext);
    //clear foodcost input field
    foodCost.value = "";

    const rentCost = document.getElementById("rent-cost");
    const rentCostText = rentCost.value;
    const totalRentCost = parseFloat(rentCostText);
    //clear rentcost input fileld
    rentCost.value ="";
    
    const clothesCost = document.getElementById("cloth-cost");
    const clothesCostText = clothesCost.value;
    const totalClothesCost = parseFloat(clothesCostText);
    //clear clothescost input field
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
//calculate saving amount and update remaining balance
const calculateSavingAmountButton = document.getElementById("calculate-saving-btn");
calculateSavingAmountButton.addEventListener("click", function(){
const savingInputFiled = document.getElementById("saving-input");
const savingInputFiledText = savingInputFiled.value;
const savingAmountInNumber = parseFloat(savingInputFiledText);

//clear saving input field
savingInputFiled.value = "";

//calculate total saving amount
const currentBalanceFiled = document.getElementById("update-balance");
const currentBalanceFiledText = currentBalanceFiled.innerText;
let currentBalance = parseFloat(currentBalanceFiledText);

 let totalSavingAmount = currentBalance * savingAmountInNumber / 100;

const updateSavingAmount = document.getElementById("saving-amount");
updateSavingAmount.innerText = totalSavingAmount;

//calculate total remaining balance
const updateRemainingBalance = document.getElementById("remaining-balance");
 updateRemainingBalance.innerText = currentBalance - totalSavingAmount;

});