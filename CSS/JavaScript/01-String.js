const name = "Vishal"
const lastName =" Kumar"
    //old way to add string 
// console.log(name + lastNamme);

// New way is known as String interpolation

console.log(`My name is ${name} and my last name is ${lastName}` );


const play = new String('Cricket');
console.log(play.length); // for find length
console.log(play.indexOf('k')); // for find index of character. If character not found, -1 is returned.
console.log(play.lastIndexOf('c')); // for search of character and word in paragraph or word.
console.log(play.lastIndexOf('C'));
console.log(play.replace('Cricket','Football')); // we can replace word from one word to another ex- replace('search word jise aap nhi chahte ho','enter that word jo app chahte ho')

const name2 = "   Vishal   "
console.log(name2);
console.log(name2.trim());  // trim() is used to replace spaces in string
console.log(name2.includes('s')); //includes methods is used to search in a word/link or many things jo hame chahiye wo h ya nhi ans given true/or false 
console.log(name2.substring(2,4));
console.log(name2.length);