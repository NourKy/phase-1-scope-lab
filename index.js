// Write your solution in this file!

var customerName = 'bob';
//const  customerName = 'bob';
var bestCustomer;
const leastFavoriteCustomer=2;
function upperCaseCustomerName(){
    customerName = customerName.toUpperCase();
    //return customerName;
   // console.log(customerName.toUpperCase())
}
//upperCaseCustomerName();
//setBestCustomer();
function setBestCustomer(){
 bestCustomer='not bob';
return bestCustomer;
}

function overwriteBestCustomer(newBestCustomer) {
    
    bestCustomer = 'maybe bob';
  }
  
  function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer=5;
  throw('error');
  }
  
  
  console.log(changeLeastFavoriteCustomer());
  
  
  
  


