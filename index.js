"use strict"

let message = `Hei Welcome to This Website, This is Just Testing Website so You Will See The Title and Absolute Nothing`

console.log(message)
alert(message)

//showing the length of the message
console.log(message.length) //104
alert(`message length was ${message.length}`) //104

//showing the position 10th and 9th index
console.log(message[10]) //m
console.log(message.charAt(9)) //o

//showing the last index
console.log(message[message.length - 1]) //g

//showing character one by one
for (let char of message) {
    console.log(char) // H, e, i ... etc.
}

//change character case to upper case
console.log(message.toUpperCase) // HEI WELCOME TO THIS WEBSITE ... etc.
alert(message.toUpperCase)

//change character case to lower case
console.log(message.toLowerCase) // hei welcome to this website ... etc.
alert(message.toLowerCase)