// array

const myData = [5,6,9,4,1]
// console.log(myData[2]); // what is my data at index second pe output is 9

const myNewData = new Array(4,45,7,4,6,)
// console.log(myNewData.length);
// console.log(myNewData[1]);

// Array method

myData.push(8)
myData.push(45)  // add a new element in the array
myData.pop() // remove last element from the array  

myData.unshift(66) // if we add a new element at 0 index then we use unshift with perameter.
myData.shift()  // if we delete 0 index element then we will use shit() without perameter.
// console.log(myData);

// diffrence between slice and splice

// console.log("A",myData);
// const myoldData =myData.slice(1,3)
// console.log(myoldData);
// console.log("B",myData);
// const myoldData2 =myData.splice(1,3)
// console.log(myoldData2);
// console.log("B",myData);


// merge two arrays and get new array

const boys = ["Vishal","anmol","Angad","Sushank","Manjesh"]
const girls =["Sapna","Shivanki","jiya","suman","avni"   ]

// boys.push(girls) // if we push array in the new array then that array behave like element. 
// console.log(boys);

const student =boys.concat(girls)
// console.log(student);

const newStudent = [...girls,...boys] // these method use in industry.
// console.log(newStudent);

const myArray =[5,8,6,4,[2,0,3],6,[9,0,1,2],7,2,1,0]
console.log(myArray.flat(3)); // flat method is used to solve array ke andar array or phir ek aur array

let score1=25
let score2="vishal"
let score3=75

const scores =Array.of(score1,score2,score3)
console.log(scores); // of method take elements and returns new array.

const player ="Vishal"
console.log(Array.from(player)); //from method is used to convert string into array  

