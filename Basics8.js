//object is collection of properties

let person = {

    firstName : "Akash" ,
    lastName  : "Shingavi",
    age : 27,
     
    fullName : function()
    {

        //we can not access our own properies directly we have to user this keyword
        console.log(this.firstName+this.lastName)
    }
}
console.log(person.fullName());

console.log(person.firstName);

console.log(person["lastName"]);

console.log(person.firstName = "Akashhh")

person.gender = "male"

console.log(person);

delete person.gender

console.log(person);

console.log("gender" in person)

// print value of all java script object

for(let key in person)
{
    console.log(person[key])
}

