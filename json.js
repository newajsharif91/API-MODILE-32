const user = { id: 1, name: "Newaj", job: "System Manager" };
const stringified = JSON.stringify(user);
// console.log(user);
// console.log(stringified);

const shop = {
  owner: "Alia",
  adress: {
    street: "Shashaiya",
    city: "Barura",
    country: "Bangladesh",
  },
  products: ["lapto", "Mic", "Monitor", "Keyboard"],
  revenue: 45000,
  inOpen: true,
  isNew: false,
};
// console.log(shop);
// const shopJSON = JSON.stringify(shop);
// console.log(shopJSON);
const shopObj = JSON.parse(JSON.stringify(shop));
console.log(shopObj);
