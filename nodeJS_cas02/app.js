const os = require("os");
const dns = require("dns");
const faker = require("faker");

os.cpus().forEach((cpu) => {
  console.log(cpu);
});

console.log(os.type());
console.log(os.totalmem());
console.log(os.arch());

const google = dns.lookup("google.com", function (err, addresses, family) {
  console.log(addresses);
});

let arr = [];
for (let i = 0; i < 100; i++) {
  arr.push({
    name: faker.name.findName(),
    title: faker.name.title(),
    street: faker.address.streetAddress(),
    city: faker.address.city(),
    country: faker.address.country(),
    phoneNumber: faker.phone.phoneNumber(),
    email: faker.internet.email(),
  });
}
console.log(arr);
