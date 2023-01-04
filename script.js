let tempX
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");

output.innerHTML = slider.value;

slider.oninput = function () {
  output.innerHTML = this.value;
}

var slider2 = document.getElementById("myRange2")
var output2 = document.getElementById("demo2");

output2.innerHTML = slider2.value;

slider2.oninput = function () {
  output2.innerHTML = this.value
}

var slider4 = document.getElementById("myRange4")
var output4 = document.getElementById("demo4");

output4.innerHTML = slider4.value;

slider4.oninput = function () {
  output4.innerHTML = this.value
}

var slider3 = document.getElementById("myRange3")
var output3 = document.getElementById("demo3");
output3.innerHTML = slider3.value;

slider3.oninput = function () {
  output3.innerHTML = this.value
}

var slider5 = document.getElementById("myRange5")
var output5 = document.getElementById("demo5");
output5.innerHTML = slider5.value;

slider5.oninput = function () {
  output5.innerHTML = this.value
}


const loanAmountInput = document.querySelector(".slider");
const interestRateInput = document.querySelector(".slider2");
const interestRateInput2 = document.querySelector(".slider4");
const loanTenureInput = document.querySelector(".slider3");
const loanTenureInput2 = document.querySelector(".slider5");
const loanEMIValue1 = document.querySelector(".loan-emi .Loan1 .value");
const loanEMIValue2 = document.querySelector(".loan-emi .Loan2 .value");
const totalInterestValue1 = document.querySelector(".total-interest .Loan1 .value");
const totalInterestValue2 = document.querySelector(".total-interest .Loan2 .value");
const totalAmountValue1 = document.querySelector(".total-amount .Loan1 .value");
const totalAmountValue2 = document.querySelector(".total-amount .Loan2 .value");
const calculateBtn = document.querySelector(".calculate-btn");

let loanAmount = parseFloat(loanAmountInput.value);
let interestRate = parseFloat(interestRateInput.value);
let loanTenure = parseFloat(loanTenureInput.value);

let interest = interestRate / 12 / 100;

let myChart;

const checkValues = () => {
  let loanAmountValue = loanAmountInput.value;
  let interestRateValue = interestRateInput.value;
  let loanTenureValue = loanTenureInput.value;

  let regexNumber = /^[0-9]+$/;
  if (!loanAmountValue.match(regexNumber)) {
    loanAmountInput.value = "10000";
  }

  if (!loanTenureValue.match(regexNumber)) {
    loanTenureInput.value = "12";
  }

  let regexDecimalNumber = /^(\d*\.)?\d+$/;
  if (!interestRateValue.match(regexDecimalNumber)) {
    interestRateInput.value = "7.5";
  }
};

const refreshInputValues = () => {
  loanAmount = parseFloat(loanAmountInput.value);
  interestRate = tempX === 2 ? parseFloat(interestRateInput2.value) : parseFloat(interestRateInput.value);
  loanTenure = tempX === 5 ? parseFloat(loanTenureInput2.value) : parseFloat(loanTenureInput.value);
  interest = interestRate / 12 / 100;
  apr = (interestRate + 3.56).toFixed(2);
};

const calculateEMI = () => {
  checkValues();
  refreshInputValues();
  let emi =
    loanAmount *
    interest *
    (Math.pow(1 + interest, loanTenure) /
      (Math.pow(1 + interest, loanTenure) - 1));

  return emi;
};
const calculateEMI1 = () => {
  checkValues();
  refreshInputValues();
  let emi = ((loanTenure * (loanAmount *
    interest *
    (Math.pow(1 + interest, loanTenure) /
      (Math.pow(1 + interest, loanTenure) - 1)))) - loanAmount)/loanTenure;
  return emi
}

const calculateEMI2 = () => {
  checkValues();
  refreshInputValues();
  let emi = 'xyz'
  return emi
}

const updateData = (emi, emi2, emi3) => {
  loanEMIValue1.innerHTML = Math.round(emi3? '':(emi2? emi2 : emi));
  loanEMIValue2.innerHTML = Math.round(emi);
  let totalAmount = Math.round(loanTenure * emi);
  totalAmountValue1.innerHTML = loanAmount.toLocaleString("en-US");
  totalAmountValue2.innerHTML = totalAmount.toLocaleString("en-US");
  totalInterestValue1.innerHTML = interestRate;
  totalInterestValue2.innerHTML = apr;
};

const init = () => {
  let emi = calculateEMI()
  let emi2 = tempX===3 ? calculateEMI1() : null
  let emi3 = tempX===2 ? calculateEMI2() : null

  updateData(emi, emi2,emi3);
}

init();

calculateBtn.addEventListener("click", init);





function Show1() {
  document.getElementById("interest123").style.display = "block";
  document.getElementById("interest12345").style.display = "none";

  tempX = 1
  refreshInputValues();
  calculateEMI()
  init();
}

function Show2() {
  document.getElementById("interest12345").style.display = "block";
  document.getElementById("interest123").style.display = "none";
  tempX = 2
  refreshInputValues();
  calculateEMI()
  init();
}

function Show3() {
  document.getElementById("interest123").style.display = "block";
  document.getElementById("interest12345").style.display = "none";

  
  tempX = 3
  refreshInputValues();
  calculateEMI()
  init();
}

function Show4() {

  tempX = 4
  refreshInputValues();
  calculateEMI()
  init();
  
}

function Show5() {

  tempX = 5
  refreshInputValues();
  calculateEMI()
  init();
}