const person= require('./Basics9')
class Pet extends person
{
    get location()
    {
        return "BlueCross"
    }

    constructor(firstName,lastName)
    {
        super(firstName,lastName);
    }


}

let pet1= new Pet("Sam", "dam");
pet1.fullname()

console.log(pet1.location)

