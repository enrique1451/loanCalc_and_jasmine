window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});
// Get the inputs from the DOM.
function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}


// Put some default values in the inputs

function setupIntialValues() {
  const values = {amount:0, years:0, rate:0};
  let amountUI = document.getElementById('loan-amount').value;
  let yearsUI = document.getElementById('loan-years').value; 
  let rateUI = document.getElementById('loan-rate').value; 

  amountUI = values.amount;
  yearsUI = values.years;
  rateUI = values.rate; 
  update(); 

}
// Call a function to calculate the current monthly payment
// Get the current values from the UI
// Update the monthly payment

function update() {
  const currentValuesUI =  getCurrentUIValues();
  updateMonthly(calculateMonthlyPayment(currentValuesUI)); 

}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  const monthlyRate = (values.rate / 100) / 12; 
  const n = Math.floor(values.years * 12); 
  return (
    (monthlyRate * values.amount) /
    (1 - Math.pow((1 + monthlyRate), -n))).toFixed(2); 
  }

  //Given a string representing the monthly payment value,
  // update the UI to show the value.
  
  
  function updateMonthly(monthly) {
    const monthlyUI = document.getElementById("monthly-payment"); 
    monthlyUI.innerText = '$' + monthly;
  };


//
