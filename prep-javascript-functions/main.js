function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

function convertHoursToMinutes(number) {
  return number * 60;
}

function personalizeGreeting(name) {
  return "Hello " + name + "!";
}

function returnDatatype(data) {
  return typeof data;
}

var addTwoNumbersResult = addTwoNumbers(2, 2);
console.log("addTwoNumbers Exercise:", addTwoNumbersResult);

var convertHoursToMinutesResult = convertHoursToMinutes(2);
console.log("convertHoursToMinutes Exercise:", convertHoursToMinutesResult);

var personalizeGreetingResult = personalizeGreeting("World");
console.log("personalizeGreeting Exercise:", personalizeGreetingResult);

var returnDatatypeResult = returnDatatype(1072);
console.log("returnDatatype Exercise:", returnDatatypeResult);
