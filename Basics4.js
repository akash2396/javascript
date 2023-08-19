//reduce , filter and map
//reduce method is used to perform an operation of all the elements of an array  

var marks = [10,20,30,40,50]                                                                     
var sum = 0;
let sumOfMarks= marks.reduce((sum,marks) => sum+marks,0);
console.log("Sum of marks is: "+sumOfMarks);
console.log(marks.reduce((sum,marks) => sum+marks,0));

console.log("================================================================================");

var substraction = 300;

let substractionOfmarks = marks.reduce((substraction,marks) => substraction-marks,300);
console.log(substractionOfmarks);

console.log("=================================================================================");

var multiplication = 1;

let multiplicationOfMarks = marks.reduce((multiplication,marks) => multiplication*marks,1);
console.log(multiplicationOfMarks);

console.log("================================================================================="); 

//Filter method - it will return an element which only matches with condition

var scores = [10,12,14,17,13,16,18,20,15];

var evenScores = [];


for(let i = 0;i<scores.length;i++)
{
    if(scores[i]%2==0)
    {
        evenScores.push(scores[i]);
    }
}

console.log(evenScores);


var evenScores= scores.filter(score => score%2==0);
console.log(evenScores);

var oddScores = scores.filter(score => score%2!=0);
console.log(oddScores);

console.log("=================================================================================");

//Map method -- it will modify each and every value of an array to new values

//multiply even array by 2
var modifiedEvenScores = [];

for(let i=0;i<evenScores.length;i++)
{   
    modifiedEvenScores.push(evenScores[i]*2)
    
}

console.log(modifiedEvenScores);

var mappedArray = evenScores.map(score => score*3)

console.log(mappedArray);







