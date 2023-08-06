// for of ---> always return by default key and values in map

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    //console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)
}

// Maps  

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")  // map always unique vaules ke lye jani jati h ou jis order mai likhte h wahi oder follow krta h.


console.log(map);

// map pe loop jab lagte h forOF ke help se tab by default wo array output dete h.
for (const key of map) {      
  //  console.log(key);
}

for (const [key, value] of map) {      // now hum array ko destruture kr rahe hai taki key and value array mai na aaye.
    // console.log(key, ':-', value);
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) { // forOf se hum obeject ko itrrate/ loop nhi kar/laga skte.
//     console.log(key, ':-', value);
    
// }