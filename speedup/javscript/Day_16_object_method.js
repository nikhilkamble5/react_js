const Product = {
  pId: 1,
  pName: "nihkil",
  pBrand: "Apple",
  pRam: "16Gb",
  prom: "256Gb",
  pProcessor: "m1",
};

// console.log(Product);

//object provides functiionality common to all javascript obj
// key  return a keys from given object in arrray format

console.log(Object.keys(Product));
var res1 = Object.getOwnPropertyNames(Product);
console.log(res1);

//👇 2 Values Method
//Object Values() return of a given object in an array format

console.log(Object.values(Product));

console.log(Object.entries(Product));
console.log(Object.is(NaN,NaN));