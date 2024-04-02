/**
*
* This class creates a vehicle
*
* By:      Cristiano Sellitto
* Version: 1.0
* Since:   2024-03-28
*/

export class Vehicle {
  // Class variables
  private licensePlateNumber: string // Vehicle license plate number
  private colour: string             // Vehicle colour
  private doors: int                 // Number of doors on the vehicle
  private speed: number              // Current speed of the vehicle
  private maxSpeed: number           // Maximum speed of the vehicle

  // Creates the base vehicle
  public constructor(
    startPlateNumber: string, startColour: string, startDoors: int, startSpeed: number, startMaxSpeed: number
  ) {
    this.licensePlateNumber = startPlateNumber
    this.colour = startColour
    this.doors = startDoors
    this.speed = startSpeed
    this.maxSpeed = startMaxSpeed
  }

  // Gets the license plate number of the vehicle
  public get licensePlateNumber() {
    return this.licensePlateNumber
  }

  // Gets the colour of the vehicle
  public get colour() {
    return this.colour
  }

  // Gets the number of doors on the vehicle
  public get doors() {
    return this.doors
  }

  // Gets the current speed of the vehicle
  public get speed() {
    return this.speed
  }

  // Gets the maximum speed of the vehicle
  public get maxSpeed() {
    return this.maxSpeed
  }

  // Sets the colour of the vehicle
  public set colour(newColour: string) {
    this.colour = newColour
  }

  // Sets the license plate number of the vehicle
  public set licensePlateNumber(newPlateNumber: string) {
    this.licensePlateNumber = newPlateNumber
  }

  // Accelerates the car, changing the speed
  public accelerate(accelPower: number, accelTime: number) {
    this.speed = (accelPower * accelTime) + this.speed
    if (this.speed > this.maxSpeed) {
      this.speed = this.maxSpeed
    }
  }

  // Brakes the car, changing the speed
  public brake(brakePower: number, brakeTime: number) {
    this.speed = this.speed - (brakePower * brakeTime)
    if (this.speed < 0) {
      this.speed = 0
    }
  }
}

