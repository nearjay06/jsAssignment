const fullNames = document.querySelector("#fullNames");/*create a variable to rep the first input*/
const submit = document.querySelector(".subBtn");/*it reps the submit button */
// const myTen = document.querySelector(".ten");
// console.log(fullNames)
const myItems = [];/*variable to create an array of values entered into the app*/


submit.onclick = function(){/*function for when submit button is pressed*/
    myItems.push(fullNames.value);
    console.log(myItems);
myItems.forEach(function(d){
console.log(d)
document.querySelector('#para').innerHTML = d


})


}


if (fullNames.value === " ") {
    alert("Please enter your names. Thank you.");
  } else {
    
  
    // const myTen = document.createElement("span");
    // myTen.createNames = "myItems";
  }
