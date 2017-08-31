/**/

/* This is my object that will store change*/
function calculateChange (amountReceived, amountDue) {
    cashierChange = {
    dollars: 0,
    quarters: 0, 
    dimes: 0,
    nickels: 0,
    pennies: 0
    }
    var changeDue = amountReceived - amountDue;
        console.log(changeDue);

    if(changeDue >= 1 ){
        cashierChange.dollars = parseInt(changeDue) / 1;
        $("#dollars-output").text(cashierChange.dollars);
        console.log(cashierChange.dollars);
    }
    if(changeDue >= .25 ){
        var quarters = .25;
        cashierChange.quarters = Math.floor((changeDue - cashierChange.dollars) / quarters);
        $("#quarters-output").text(cashierChange.quarters);
        console.log(cashierChange.quarters);
    }
    if(changeDue >= .10){
        var dimes = .10; 
        cashierChange.dimes = Math.floor((changeDue -(cashierChange.dollars + (cashierChange.quarters * .25))) / dimes);
        $("#dimes-output").text(cashierChange.dimes);
        console.log(cashierChange.dimes);
    }
    if(changeDue >= .05){
        var nickels = .05;
        cashierChange.nickels = Math.floor((changeDue -(cashierChange.dollars + (cashierChange.quarters * .25) + (cashierChange.dimes * .10)))/ nickels);
        $("#nickels-output").text(cashierChange.nickels);
        console.log(cashierChange.nickels);
    }
    if(changeDue >= .01){
        var pennies = .01;
        cashierChange.pennies = Math.round((changeDue -(cashierChange.dollars +(cashierChange.quarters * .25) +(cashierChange.dimes * .10) +(cashierChange.nickels *.05)))/ pennies);
        $("#pennies-output").text(cashierChange.pennies);
        console.log(cashierChange.pennies); 
    }
}

function handleClickEvent(){
    var amountReceived = parseFloat($("#amount-received").val());
    var amountDue = parseFloat($("#amount-due").val());
    var change = calculateChange(amountReceived, amountDue);
}

var button = document.getElementById("calculate-change");
button.onclick = handleClickEvent;


