/*
 */

// 1)Create a function to calculate the sum of the two given integers. If the two values are the same, then returns the triple of their sum.

function findSum(n1, n2) {
  if (n1 !== n2) {
    sum = n1 + n2;
  } else {
    sum = (n1 + n2) * 3;
  }
  return sum;
}
console.log(findSum(2, 3));

// 2)Create a function to check two given numbers. Return true if one of the numbers is 50, or if their sum is 50.

function checkfifty(n1, n2) {
  if (n1 || n2 === 50) {
    return true;
  } else if (n1 + n2 === 50) {
    return true;
  } else return false;
}
console.log(checkfifty(3, 4));

// 3)Create a function to remove a character at the specified position of a given string and return the new string.

deleted = "Strive School";
deleted.split("");
function removeChar(d1) {
  deleted.split("");
  console.log(deleted);
  //   deletedLetter = deleted.indexOf(d1);
  //   deleted.splice(deletedLetter, 1);
  //   console.log(deleted);
}
removeChar(4);

// 4)Create a function to find the largest of three given integers.

function largest(n1, n2, n3) {
  if (n1 > n2 && n1 > n3) {
    return n1;
  } else if (n2 > n1 && n2 > n3) {
    return n2;
  } else if (n3 > n1 && n3 > n2) {
    return n3;
  }
}
console.log(largest(5, 2, 3));

// 5)Create a function to check whether two numbers are in range 40..60 or in the range 70..100 inclusive.

function numberRange(num1, num2) {
  if (40 <= (num1 && num2) <= 60) {
    console.log("numbers are in range 40-60");
  } else if (70 <= (num1 && num2) <= 100) {
    console.log("numbers are in range 70-100");
  }
}
console.log(numberRange(40, 50));

// 6) Create a function that creates and returns the specified number of copies of a given string (positive number).

function makeCopies(str, num1) {
  for (i = 1; i < num1 + 1; i++) {
    console.log(str);
  }
}
makeCopies("Gamze", 7);

// 7)Create a function that returns the city name of a given string, if the string begins with "Los" or "New", otherwise returns blank.

function cityName(str) {
  if (str === "Los") {
    return str + " Angeles";
  } else if (str === "New") {
    return str + " York";
  } else return " ";
}
console.log(cityName("Los"));

// 8)Create a function to calculate the sum of three elements of a given array of integers of length 3.

function sumOfArray(n1, n2, n3) {
  let arr = [n1, n2, n3];
  sum = 0;
  for (i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}
console.log(sumOfArray(2, 3, 4));

// 9)Create a function to test whether an array of integers of length 2 contains 1 or a 3.

function testInt(n1, n2) {
  arr = [n1, n2];
  if (n1 === 1 || n2 === 1) {
    console.log("array contains 1 or 3");
  } else if (n1 === 3 || n2 === 3) {
    console.log("array contains  1 or 3");
  } else {
    console.log("no");
  }
}
testInt(2, 6);

// 10)Create a function to test whether an array of integers of length 2 does not contain 1 or a 3
function testNot(n1, n2) {
  arr = [n1, n2];
  if (n1 !== 1 || n2 !== 1) {
    console.log("array doesn't have 1 or 3");
  } else if (n1 !== 3 || n2 !== 3) {
    console.log("array doesn't have  1 or 3");
  } else {
    console.log("it has");
  }
}
testNot(2, 6);

// 11)Create a function to find the longest string from a given array of strings.

function longestStr(str1, str2) {
  if (str1.length > str2.length) {
    console.log(str1);
  } else if (str2.length > str1.length) {
    console.log(str2);
  } else console.log("lenght is same");
}
longestStr("gamze", "semih");

// 12)Create a function to find the types of a given angle.
// Types of angles:
//     Acute angle: An angle between 0 and 90 degrees.
//     Right angle: An 90 degree angle.
//     Obtuse angle: An angle between 90 and 180 degrees.
//     Straight angle: A 180 degree angle.

console.log("*******Q12*******");
function findAngle(ang1) {
  if (0 <= ang1 && ang1 <= 90) {
    console.log("Acute angle");
  } else if (ang1 === 90) {
    console.log("Right angle");
  } else if (90 < ang1 && ang1 < 180) {
    console.log("Obtuse angle");
  } else if ((ang1 = 180)) {
    console.log("Straight angle");
  } else return false;
}
findAngle(180);

// 13)Create a function to find the index of the greatest element of a given array of integers
console.log("*******Q13*******");
function greatestIndex(arr) {
  const largest = [...arr].sort((a, b) => b - a)[0];
  console.log(largest);
  return arr.indexOf(largest);
}
console.log(greatestIndex([4, 8, 2]));

// 14)Create a function to get the largest even number from an array of integers.
console.log("*******Q14*******");

function largestEl(arr) {
  const temp = [];
  largest = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0 && arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
}
console.log(largestEl([3, 8, 1, 9, 4, 6]));

// 15)Create a function to check from two given integers, whether one is positive and another one is negative.
console.log("*******Q15*******");

function pozneg(n1, n2) {
  if (n1 > 0 && n2 < 0) {
    console.log("one pozitive one negative");
  } else if (n1 < 0 && n2 > 0) {
    console.log("one pozitive one negative");
  } else console.log("none of them");
}
pozneg(4, 5);

// 16)Create a function to create new string with first 3 characters are in lower case and the others in upper case.
//If the string length is less than 3 convert all the characters in upper case.

console.log("*******Q16*******");

function lowerCase(str) {
  if (str.length < 3) {
    return str.toUpperCase();
  } else {
    return str.slice(0, 3).toLowerCase() + str.slice(3).toUpperCase();
  }
}
console.log(lowerCase("gamze"));

// 17)Create a function to calculate the sum of the two given integers, If the sum is in the range 50..80 return 65 other wise return 80.
console.log("*******Q17*******");

function integers(int1, int2) {
  sum = int1 + int2;
  if (50 < sum && sum < 80) {
    return 65;
  } else return 80;
}
console.log(integers(40, 24));

// 18)Create a function to convert a number to a string, the content of which depends on the number's factors. Follow next example:
// If the number has 3 as a factor, output 'Diego'.
// If the number has 5 as a factor, output 'Riccardo'.
// If the number has 7 as a factor, output 'Stefano'.
// If the number does not have 3, 5, or 7 as a factor, just pass the number's digits straight through.
// Examples
// 28's factors are 1, 2, 4, 7, 14, 28.
// this would be a simple "Stefano".
// 30's factors are 1, 2, 3, 5, 6, 10, 15, 30.
// this would be a "DiegoRiccardo".
// 34 has four factors: 1, 2, 17, and 34.
// this would be "34".

console.log("*******Q18*******");

function factors(num1) {
  str = " ";
  if (num1 % 3 === 0) str += "Diego";
  if (num1 % 5 === 0) str += "Riccardo";
  if (num1 % 7 === 0) str += "Stefano";
  return str;
}
console.log(factors(30));

// 19)Create a function that given a phrase returns its acronym, like British Broadcasting Corporation returns BBC

console.log("*******Q19*******");

function acronym(phrase) {
  const temp = phrase.split(" ");
  let acronym = "";
  for (let i = 0; i < temp.length; i++) {
    acronym += temp[i].charAt(0).toUpperCase();
  }
  return acronym;
}
console.log(acronym("British Broadcasting Corporation"));
