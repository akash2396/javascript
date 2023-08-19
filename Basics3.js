//Declaration of an array 
let array = Array(6);
var numbers= new Array(10,20,30,40,50,60)
console.log(numbers)

//Declaration oa an array 
let marks = [60,70,75,80,90]
console.log(marks.length)
console.log("Marks are: "+marks)

//Add the new element in array
marks.push(100)
console.log(marks)

//Removes the last element from an array
marks.pop()
console.log(marks)

//add the element at the start of an array
marks.unshift(10)
console.log(marks)

//Getting the index value of an element
let indexNo= marks.indexOf(80)
console.log(marks)
console.log(indexNo)

//Check that element is present or not in an array  
let booleanValue= marks.includes(100)
console.log(booleanValue)

let valueAtIndex= marks.indexOf(75)
console.log(valueAtIndex)

console.log(marks.includes(500))

console.log(marks)

console.log(marks.slice(1,5))
console.log(marks.slice(2,4))

let rates = [30,40,67,75,73,75,27,86]

let sum = 0
for(let i=0;i<rates.length;i++)
{
   
    sum = sum + rates[i]
}

console.log("Sum is = "+sum)


let arr = [23,4,6,3];


console.log("===================================")
// console.log(arr.slice(start point, "end point"))

console.log(arr.slice(1, arr.length))

let total = 4;

// arr.forEach(value => {
//     total += value;
// });

for (let i = 0; i < arr.length; i++) {
    total += arr[i];
    
}

console.log(arr.reduce((total, value) => total + value, 4 ));

console.log(total)

console.log(typeof null); // object
console.log(typeof undefined);
console.log(typeof arr);

console.log("===================================")



