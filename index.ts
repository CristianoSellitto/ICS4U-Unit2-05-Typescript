/**
*
* This program creates multiple vehicles and changes their speed
*
* By:      Cristiano Sellitto
* Version: 1.0
* Since:   2024-03-28
*/

import { Vehicle } from './Vehicle'

// Create a ford focus
console.log('Creating a Ford Focus...')
const fordFocus = new Vehicle('B40-C4RR0', 'white', 4, 0, 284)
// Modifier variables
let accelPower = 10
let accelTime = 10
let newColour = 'black'
console.log(`- License plate number: ${fordFocus.licensePlateNumber}`)
console.log(`- Vehicle colour: ${fordFocus.colour}`)
console.log(`- Number of doors: ${fordFocus.doors}`)
console.log(`- Current speed: ${fordFocus.speed}`)
console.log(`- Maximum speed: ${fordFocus.maxSpeed}`)
console.log(`Accelerating the car for ${accelTime} seconds with a power of ${accelPower}`)
fordFocus.accelerate(accelPower, accelTime)
console.log(`New speed: ${fordFocus.speed}`)
console.log(`Changing the colour to ${newColour}`)
fordFocus.colour = newColour
console.log(`New colour: ${fordFocus.colour}`)

// Create a ferrari
console.log('\nCreating a Ferrari...')
const ferrari = new Vehicle('VHD-35HU', 'red', 2, 0, 320)
// Modifier variables
accelPower = 100
accelTime = 4
let brakePower = 10
let brakeTime = 10
newColour = 'racing red!'
console.log(`- License plate number: ${ferrari.licensePlateNumber}`)
console.log(`- Vehicle colour: ${ferrari.colour}`)
console.log(`- Number of doors: ${ferrari.doors}`)
console.log(`- Current speed: ${ferrari.speed}`)
console.log(`- Maximum speed: ${ferrari.maxSpeed}`)
console.log(`Accelerating the car for ${accelTime} seconds with a power of ${accelPower}`)
ferrari.accelerate(accelPower, accelTime)
console.log(`New speed: ${ferrari.speed}`)
console.log(`Breaking the car for ${brakeTime} seconds with a power of ${brakePower}`)
ferrari.brake(brakePower, brakeTime)
console.log(`New speed: ${ferrari.speed}`)
console.log(`Changing the colour to ${newColour}`)
ferrari.colour = newColour
console.log(`New colour: ${ferrari.colour}`)

// Create a citroen ami
console.log('\nCreating a Citroen Ami...')
const citroenAmi = new Vehicle('FS-695-DQ', 'blue', 2, 0, 45)
// Modifier variables
accelPower = 5
accelTime = 10
brakePower = 2
brakeTime = 10
newColour = 'purple'
console.log(`- License plate number: ${citroenAmi.licensePlateNumber}`)
console.log(`- Vehicle colour: ${citroenAmi.colour}`)
console.log(`- Number of doors: ${citroenAmi.doors}`)
console.log(`- Current speed: ${citroenAmi.speed}`)
console.log(`- Maximum speed: ${citroenAmi.maxSpeed}`)
console.log(`Accelerating the car for ${accelTime} seconds with a power of ${accelPower}`)
citroenAmi.accelerate(accelPower, accelTime)
console.log(`New speed: ${citroenAmi.speed}`)
console.log(`Breaking the car for ${brakeTime} seconds with a power of ${brakePower}`)
citroenAmi.brake(brakePower, brakeTime)
console.log(`New speed: ${citroenAmi.speed}`)
console.log(`Changing the colour to ${newColour}`)
citroenAmi.colour = newColour
console.log(`New colour: ${citroenAmi.colour}`)

// Show the program as done
console.log('\nDone.')
