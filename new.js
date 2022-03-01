var x;
x = prompt("Enter your name");

document.write(x);
console.log(x);
var choko = 2;
var choklet = 4;
console.log( choko ** choklet)
var givenroast = 0;
while(givenroast<7){
    
    console.log("roast den khamu");
    givenroast++;
    console.log(givenroast);
   
}
var number = 1;
while(number <= 20){
    console.log(number);
    number += 2;
}
for loop running
for(var roastgiven = 0; roastgiven < 10; roastgiven++){
    console.log('rost khamu gop gop kore');
    console.log(roastgiven);
}
for(var i = 1; i <= 10; i++){
    console.log(i);
    
}
for(var i = 0; i<=20; i+=2){
    console.log(i);
}
var numbers = [50, 60, 70, 80, 90, 100];
// console.log(numbers);
for(var i = 0; i <= numbers.length; i++){
    var eliment = numbers[i];
    console.log(eliment);
    
}
var job = true;
var cashMoney = 1000;
var bike = false;
if (job == true || cashMoney > 1500){
    console.log("biya kormu shali pamu");
}
else{
    console.log("biya hoilo na shali pamu na?");
}

var celcious = prompt('Please enter a temperature');
var convert = F=9/5*celcious +32;
alert("fahrenheit:" + result + "Degree");
console.log('Task Complete');

Change for number to string
var ranaRoll = 93;
var binary = ranaRoll.toString(2);
console.log(binary);
var ranaRoll = 93;
console.log(ranaRoll);
var octal = ranaRoll.toString();
console.log(octal);
var name = 'I am a programmer'; 
console.log(name);
function bringsSingara(taka){
    console.log("signgarar jonno dice");
    console.log("mama singara den khamu");
}
var money = 200;
bringsSingara(money);

function bringSingara(taka){
     console.log("singarar jonno dice");
     console.log("mama singara den khamu");
     var singaraPrice = 10;
     var singaraQuantity = taka / singaraPrice;
     return(singaraQuantity);
}
var money = 90;
var singara = bringSingara(money);
console.log("ai nen singara", singara);

function bringSingara(taka){
      console.log("singarar jonno dice");
      console.log("mama singara den");
      var singaraPrice = 10;
      var singaraQuantity = taka / singaraPrice;
      return(singaraQuantity);
}
var money = 90;
var singara = bringSingara(money);
console.log("ai nen singara", singara);

function singara(money){

    console.log("mama singara den joldi naile vhiya marbo");
    console.log("vhiya singara anse");
    var singlePrice=5;
    var totalMoney= money / singlePrice;
    return totalMoney;
}

var taka=100;
var sing=singara(taka);   
console.log("eilon singara", sing);
function doubleNumber(number1, number2){
    console.log(number1, number2);
      var totalNumber = number1 + number2;
      return(totalNumber);
}
var num1 = 30;
var num2 = 50;
var result = doubleNumber(num1, num2);
console.log("na dekhaiya jabi koi", result);
function doubleNumber(num1, num2){
     console.log(num1, num2);
     var totalPrice = num1 + num2;
     return(totalPrice);
}
var number1 = 30;
var number2 = 50;
var result = doubleNumber(number1, number2);
console.log("low aijka", result);

function numbersOfDouble(num1, num2){
    console.log(num1, num2);
    var difference = num1 - num2;
    return(difference);

}
  var result = numbersOfDouble(50, 30);
  console.log("mojai moja", result);


  function remain(num1, num2){
       console.log(num1, num2);
       var vhagsesh = num1 % num2;
       return(vhagsesh);
}
var firstNumber = 11;
var secondNumber = 5;
var result = remain(firstNumber, secondNumber);
console.log("vhagsesh paiya laici mamu", result);







