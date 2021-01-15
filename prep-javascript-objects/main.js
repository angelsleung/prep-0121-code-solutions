var person = {
  firstName: "Angel",
  lastName: "Leung",
  hobby: "dancing"
};

console.log(person);

var fullName = person.firstName + " " + person.lastName;
console.log("The person's name is:", fullName);

person.job = "student";
console.log("The person's current job is:", person.job);

person.previousJob = "engineer";
console.log("The person's previous job is:", person.previousJob);

console.log("Complete person object:", person);

var myCar = {
  make: "Toyota",
  model: "Camry",
  year: "2014"
};

console.log("Car info:", myCar);

myCar["owner"] = fullName;
var myCarSentence = "My name is " + myCar["owner"] + " and I drive a " +
  myCar["year"] + " " + myCar["make"] + " " + myCar["model"] + ".";
console.log(myCarSentence);

myCar["color"] = "white";
console.log("My full car info:", myCar);
