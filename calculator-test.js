
it('should calculate the monthly rate correctly', function () {

  const values = {
    amount: 10,
    years: 10,  
    rate: 5 
      
  };
  expect(calculateMonthlyPayment(values)).toEqual('0.11'); 
});


it("should return a result with 2 decimal places", function() {
  const values = {
    amount: 100,
    years: 10,  
    rate: 21 
    
  };
  expect(calculateMonthlyPayment(values)).toEqual('2.00');
});

