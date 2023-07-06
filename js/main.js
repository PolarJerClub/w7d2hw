//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

for (let i in Object.values(person3)){
    if (Array.isArray(Object.values(person3)[i])){
        for (value of Object.values(person3)[i]){
            console.log(value)
        }
    } else {
        console.log(Object.values(person3)[i])
    }
}


//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype

class Dude {
    constructor(name, age){
        this.name = name,
        this.age = age
    }

    printInfo = () => {
        console.log(`Name: ${this.name} \nAge: ${this.age}`)
    }

    addAge = (age) => {
        this.age += 1
    }
}

let guy = new Dude('Guy', 27)
guy.printInfo()
let bro = new Dude('Bro', 29)
bro.printInfo()
bro.addAge()
bro.printInfo()
bro.addAge()
bro.printInfo()
bro.addAge()
bro.printInfo()


// Use an arrow to create the printInfo method

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 


// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/


let giggle = 'tehehehehehehe'
let tiny = 'ittybitty'

const checkTen = (arr) => {
    return new Promise((resolve, reject) => {
        if (arr.length > 10) {
            resolve(arr)
        } else {
            reject(arr)
        }
    })
}

checkTen(giggle)
    .then((result) => {
        console.log(`${result} is: Big word`)
    })
    .catch((error) => {
        console.log(`${error} is: Small Number`)
    })

checkTen(tiny)
    .then((result) => {
        console.log(`${result} is: Big word`)
    })
    .catch((error) => {
        console.log(`${error} is: Small Number`)
    })












