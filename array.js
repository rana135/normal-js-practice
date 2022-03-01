var mangoes = [10, 11, 12, 13]
var nayikas = ["sabnoor", "mousumi", "priya"];
var nayikasTotal = nayikas.length;
console.log(nayikas.length);
var priyaIndex = nayikas.indexOf("priya");
console.log(nayikas.indexOf("mousumi"));
var secondindex = mangoes[2];
console.log(secondindex);
console.log(mangoes);
mangoes[2] = 20;
console.log(mangoes);

var mobilesPrice = [10, 20, 30, 40, 50, 60, 70]
var mobilesindex = mobilesPrice.indexOf(40);
var secondindex = mobilesPrice[5];
mobilesPrice[50] = 120;
mobilesPrice.push(80);
mobilesPrice.push(90);
mobilesPrice.pop();

mobilesPrice.pop();
mobilesPrice.shift();
mobilesPrice.shift();


console.log(mobilesPrice);
mobilesPrice.unshift(200);



console.log(mobilesindex);
console.log(secondindex);
console.log(mobilesPrice);
