//String and its methods

let day = "Monsday "



//Length of String

console.log(day.length)

//To get the sub string from main string

console.log(day.slice(0,3))

//want to acces any character from string

console.log(day[3])

//Spliting the string

let splitDay= day.split("s");

secondWord= splitDay[1]

console.log(secondWord);

console.log(secondWord.length);

console.log(splitDay[1].trim().length)

let date = "23"
let nextDate = "30"

//How to convert string into integer

let num1= parseInt(date);
let num2= parseInt(nextDate)

console.log(num2-num1);

//How to convert6 number into string

let value = 100;

newValue = toString(value)

console.log(typeof(newValue))

let quote = day+" is a funday";

console.log(quote);

console.log(quote.indexOf("day"))

console.log(quote.indexOf("day",5));

let count = 0

let val = quote.indexOf("day")

while(val!== -1)
{
    count++
    val = quote.indexOf("day",val+1)
}

console.log(count);







