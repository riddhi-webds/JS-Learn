const name = "Riddhi"
const repoCount = 50

// console.log(name + repoCount + ' Value'); +++++++++++++++ Not modern method so dont use this method

console.log(`My name is ${name} nd my repo count is ${repoCount}`);

const gameName = new String('riddhi-rj-com')
// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('h'));

const newStringg = gameName.substring(0, 4)
console.log(newStringg);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "       riddhi       "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitessh%20skhinjbk"
console.log(url.replace('%20', '-'));

console.log(url.includes('hitesh'))
console.log(url.includes('sundar'))

console.log(gameName.split('-'));


