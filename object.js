/* var banglaBook = { page:200, color:"white", price:"250tk", weight:"500gram"}; */
var mobile = {
    color:"black",
    weight:"700gram",
    memory:"32gb",
    price:7500,
    network:"5g",
};
// console.log(mobile);
// console.log(mobile.price);
// var mobileMemory = mobile.memory;
// console.log(mobileMemory);
mobile.memory = "512gb";
mobile['network'] = "6g";
var mobileprice = "price";
mobile[mobileprice]= 20000;
console.log(mobile);