/*
 * Hello. 2 points.
 */

function hello() {
  // WRITE YOUR EXERCISE 1 CODE HERE
  let hello = document.getElementById('output1');
  hello.innerHTML = "Hello, AP Computer Science Principles!";

  ////////////////// DO NOT MODIFY
  check("hello"); // DO NOT MODIFY
  ////////////////// DO NOT MODIFY
}

/*
 * Hello, Again. 3 points.
 */

function helloAgain() {

  //////////// DO NOT MODIFY      Use the @name letiable to store
  let name; // DO NOT MODIFY      the value that the user enters
  //////////// DO NOT MODIFY      in response to your prompt.

  // WRITE YOUR EXERCISE 2 CODE HERE
  name = prompt("Please input your name:");
  let helloAgain = document.getElementById("output2");
  helloAgain.innerHTML = "Hello, " + name + "!";
  ///////////////////////////// DO NOT MODIFY
  check("helloAgain", name); // DO NOT MODIFY
  ///////////////////////////// DO NOT MODIFY
}

/*
 * Celsius. 5 points.
 */

function celsius() {

  //////////////////////////////////////////////////////// DO NOT MODIFY
  let cels = ((Math.random() * 1001) - 100).toFixed(2); // DO NOT MODIFY
  //////////////////////////////////////////////////////// DO NOT MODIFY

  // The above code generates a random number between -100 and 1000
  // (inclusive), and rounds this value to 2 decimal places.

  // WRITE YOUR EXERCISE 3 CODE HERE
  let fahr = ((cels * 1.8) + 32).toFixed(2);
  let celsius = document.getElementById("output3");
  celsius.innerHTML = cels + " degrees Celsius equals " + fahr + " degrees Fahrenheit.";

  ////////////////////////// DO NOT MODIFY
  check("celsius", cels); // DO NOT MODIFY
  ////////////////////////// DO NOT MODIFY
}

/*
 * Fahrenheit. 5 points.
 */

function fahrenheit() {

  //////////////////////////////////////////////////////// DO NOT MODIFY
  let fahr = ((Math.random() * 1001) - 100).toFixed(2); // DO NOT MODIFY
  //////////////////////////////////////////////////////// DO NOT MODIFY

  // The above code generates a random number between -100 and 1000
  // (inclusive), and rounds this value to 2 decimal places.

  // WRITE YOUR EXERCISE 4 CODE HERE
  let cels = ((fahr - 32) * (5 / 9)).toFixed(2);
  let fahrenheit = document.getElementById("output4");
  fahrenheit.innerHTML = fahr + " degrees Fahrenheit equals " + cels + " degrees Celsius.";

  ///////////////////////////// DO NOT MODIFY
  check("fahrenheit", fahr); // DO NOT MODIFY
  ///////////////////////////// DO NOT MODIFY
}

/*
 * Inches. 5 points.
 */

function inches() {

  /////////////////////////////////////////////////////// DO NOT MODIFY
  let input = prompt("Enter a non-negative integer."); // DO NOT MODIFY
  /////////////////////////////////////////////////////// DO NOT MODIFY

  // You are free to modify the value of inches, which you'll likely
  // need to do. Please do not modify the value of input.

  ////////////////////// DO NOT MODIFY
  let inches = input; // DO NOT MODIFY
  ////////////////////// DO NOT MODIFY

  // WRITE YOUR EXERCISE 5 CODE HERE
  let miles = Math.floor(input / 63360);
  let milesRemainder = input % 63360;
  let yards = Math.floor(milesRemainder / 36);
  let yardsRemainder = milesRemainder % 36;
  let feet = Math.floor(yardsRemainder / 12);
  let feetRemainder = yardsRemainder % 12;
  let print = document.getElementById("output5");
  print.innerHTML = "Miles: " + miles + "<br/>" + "Yards: " + yards + "<br/>" + "Feet: "  + feet + "<br/>" + "Inches: " + feetRemainder;

  ////////////////////////// DO NOT MODIFY
  check("inches", input); // DO NOT MODIFY
  ////////////////////////// DO NOT MODIFY
}

/*
 * Centimeters. 5 points.
 */

function centimeters() {

  /////////////////////////////////////////////////////// DO NOT MODIFY
  let input = prompt("Enter a non-negative integer."); // DO NOT MODIFY
  /////////////////////////////////////////////////////// DO NOT MODIFY

  // You are free to modify the value of centimeters, which you'll
  // likely need to do. Please do not modify the value of input.

  /////////////////////////// DO NOT MODIFY
  let centimeters = input; // DO NOT MODIFY
  /////////////////////////// DO NOT MODIFY

  // WRITE YOUR EXERCISE 6 CODE HERE
  let kilometers = Math.floor(input / 100000);
  let kilometersRemainder = input % 100000;
  let meters = Math.floor (kilometersRemainder / 100);
  let metersRemainder = kilometersRemainder % 100;
  let print = document.getElementById("output6");
  print.innerHTML = "Kilometers: " + kilometers + "<br/>" + "Meters: " + meters + "<br/>" + "Centimeters: " + metersRemainder;

  /////////////////////////////// DO NOT MODIFY
  check("centimeters", input); // DO NOT MODIFY
  /////////////////////////////// DO NOT MODIFY
}

/*
 * Fluid Ounces. 5 points.
 */

function fluidOunces() {

  /////////////////////////////////////////////////////// DO NOT MODIFY
  let input = prompt("Enter a non-negative integer."); // DO NOT MODIFY
  /////////////////////////////////////////////////////// DO NOT MODIFY

  // You are free to modify the value of fluidOunces, which you'll
  // likely need to do. Please do not modify the value of input.

  /////////////////////////// DO NOT MODIFY
  let fluidOunces = input; // DO NOT MODIFY
  /////////////////////////// DO NOT MODIFY

  // WRITE YOUR EXERCISE 7 CODE HERE
  let gallons = Math.floor(input / 128);
  let gallonsRemainder = input % 128;
  let quarts = Math.floor(gallonsRemainder / 32);
  let quartsRemainder = gallonsRemainder % 32;
  let pints = Math.floor(quartsRemainder / 16);
  let pintsRemainder = quartsRemainder % 16;
  let cups = Math.floor(pintsRemainder / 8);
  let cupsRemainder = pintsRemainder % 8;
  let print = document.getElementById("output7");
  print.innerHTML = "Gallons: " + gallons + "<br/>" + "Quarts: " + quarts + "<br/>" + "Pints: " + pints + "<br/>" + "Cups: " + cups + "<br/>" + "Fluid Ounces: " + cupsRemainder;

  /////////////////////////////// DO NOT MODIFY
  check("fluidOunces", input); // DO NOT MODIFY
  /////////////////////////////// DO NOT MODIFY
}

/*
 * Ounces. 5 points.
 */

function ounces() {

  /////////////////////////////////////////////////////// DO NOT MODIFY
  let input = prompt("Enter a non-negative integer."); // DO NOT MODIFY
  /////////////////////////////////////////////////////// DO NOT MODIFY

  // You are free to modify the value of ounces, which you'll likely
  // need to do. Please do not modify the value of input.

  ////////////////////// DO NOT MODIFY
  let ounces = input; // DO NOT MODIFY
  ////////////////////// DO NOT MODIFY

  // WRITE YOUR EXERCISE 8 CODE HERE
  let tons = Math.floor(ounces / 32000);
  let tonsRemainder = ounces % 32000;
  let pounds = Math.floor(tonsRemainder / 16);
  let poundsRemainder = tonsRemainder % 16;
  let print = document.getElementById("output8");
  print.innerHTML = "Tons: " + tons + "<br/>" + "Pounds: " + pounds + "<br/>" + "Ounces: " + poundsRemainder;

  ////////////////////////// DO NOT MODIFY
  check("ounces", input); // DO NOT MODIFY
  ////////////////////////// DO NOT MODIFY
}

/*
 * Money. 7 points.
 */

function money() {

  /////////////////////////////////////////////////////// DO NOT MODIFY
  let input = prompt("Enter a non-negative integer."); // DO NOT MODIFY
  /////////////////////////////////////////////////////// DO NOT MODIFY

  // You are free to modify the value of pennies, which you'll likely
  // need to do. Please do not modify the value of input.

  /////////////////////// DO NOT MODIFY
  let pennies = input; // DO NOT MODIFY
  /////////////////////// DO NOT MODIFY

  // WRITE YOUR EXERCISE 9 CODE HERE
  let dollars = Math.floor(pennies / 100);
  let dollarsRemainder = pennies % 100;
  let quarters = Math.floor(dollarsRemainder / 25);
  let quartersRemainder = dollarsRemainder % 25;
  let dimes = Math.floor(quartersRemainder / 10);
  let dimesRemainder = quartersRemainder % 10;
  let nickels = Math.floor(dimesRemainder / 5);
  let nickelsRemainder = dimesRemainder % 5;
  let print = document.getElementById("output9");
  print.innerHTML = "Dollars: " + dollars + "<br/>" + "Quarters: " + quarters + "<br/>" + "Dimes: " + dimes + "<br/>" + "Nickels: " + nickels + "<br/>" + "Pennies: " + nickelsRemainder;

  ///////////////////////// DO NOT MODIFY
  check("money", input); // DO NOT MODIFY
  ///////////////////////// DO NOT MODIFY
}

/*
 * Change. 8 points.
 */

function change() {

  ///////////////////////////////////////////////////////////////////// DO NOT MODIFY
  let input = prompt("Enter a non-negative number less than 1.00."); // DO NOT MODIFY
  ///////////////////////////////////////////////////////////////////// DO NOT MODIFY

  // You are free to modify the value of amount, which you'll likely
  // need to do. Please do not modify the value of input.

  ////////////////////// DO NOT MODIFY
  let amount = input; // DO NOT MODIFY
  ////////////////////// DO NOT MODIFY

  // WRITE YOUR EXERCISE 10 CODE HERE
  let quarters = Math.floor(amount / .25);
  let quartersRemainder = amount % .25;
  let dimes = Math.floor(quartersRemainder / .10);
  let dimesRemainder = quartersRemainder % .10;
  let nickels = Math.floor(dimesRemainder / .05);
  let nickelsRemainder = dimesRemainder % .05;
  let pennies = nickelsRemainder / .01;
  let print = document.getElementById("output10");
  print.innerHTML = Math.round(quarters + dimes + nickels + pennies) + " coins.";


  /*let quarters = 0;
  let dimes = 0;
  let nickels = 0;
  let pennies = 0;

  while (amount > 0){
    if (amount > .25){
      let quarters = quarters + Math.floor(amount / .25);
      let amount = amount - quarters * .25;

    } else if (amount > .1){
      let dimes = dimes + Math.floor(amount / .1);
      let amount = amount - dimes * .1;

    } else if (amount > .05){
      let nickels = nickels + Math.floor(amount / .05);
      let amount = amount - nickels * .05;

    } else (amount > .01){
      let pennies = pennies + Math.floor(amount / .01);
      let amount = amount - pennies * .01;
    }
  }
    let print = document.getElementById("output10");
    print.innerHTML = quarters + dimes + nickels + pennies + " coins.";*/

  ////////////////////////// DO NOT MODIFY
  check("change", input); // DO NOT MODIFY
  ////////////////////////// DO NOT MODIFY
}
