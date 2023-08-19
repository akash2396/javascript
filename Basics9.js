module.exports = class persons22
{
    //one way to define property
    age  = 25

   // location = "india"

    //we can define property using getter method - this one is also treated as property

    //this is not a method this used to declare the property
    get location()
    {
        return "india"
    }

    // constructor is a method which execute by default when you create an object of the class

    constructor(firstName,lastName)
    {
        this.firstName = firstName;
        this.lastName = lastName
    }

    //method
    fullname()
    {
        console.log(this.firstName+this.lastName);
    }


}







//  let persons = new persons22("Rohan","Dhiman")
//  persons.fullname();

// console.log(persons.age)

// console.log(persons.location)

// let persons1 = new persons22("darshan ","kotambe")
// persons1.fullname();

