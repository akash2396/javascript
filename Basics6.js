//Scopee of the variables

//var keyword - global level / functional

function printGreet()
{
    var greet = "Good Morning";
    console.log(greet);
}

printGreet();

 // console.log(greet); //this will throw an error because greet is decleared in a function

var greet = "Good evening"

if(1==1)
{
    greet = "Good Afternoon"
}

console.log(greet);

//if it is var it will replace the global variable with variable decleared in the blocl {}


// let keyword ==> global level / block level {}

let myName = "akash"

if(1==1)
{
    let myName = "amol"
}

console.log(myName);

//but if it is a let it will not replace the global variable with variable decleared in vlock {} as scope is out insde the block {}

// let can not be redecleared but var can be

/*
let num = 2;

let num =4;

*/

//both let and var can be reinitialize

/*

let sum = 23

sum = 25;

var sub =30

sub = 50

*/

// another keyword is const which is similar to let only diff is it can not be reinitialize


