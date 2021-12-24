const util = require("util");

const dollar = "23";
const name = "Dave";

//koristenje na placeholder-i
util.format("%s has %d dollars", name, dollar);

//koristenje na timestamp dodeka logirame nesto
util.log("String with a timestamp");

//proveruvanje na tipot //vraka vrednosti true/false
const arr = [];
console.log(util.isArray(arr));
console.log(util.isArray({ array: [] }));

//Zadacha
const faker = require("faker");

let userData = [];
for (let i = 0; i < 50; i++) {
  userData.push({
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    jobType: faker.name.jobType(),
    car: faker.vehicle.model(),
    carColor: faker.vehicle.color(),
  });
}
console.log(userData);
