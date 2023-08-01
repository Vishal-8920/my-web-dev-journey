// object litrals
const mySmbl =Symbol("key1")
const user1 ={
    name: "vishal",
    [mySmbl]:"myKey1",
    age: 18,
    location: "noida",
    email: "vkc@123"

}

// access of object

// console.log(user1.email);
// console.log(user1["email"]);
// console.log(user1[mySmbl]); // interview question
user1.age =20
user1.email = "vkc@gmail.com" // user data update
Object.freeze(user1) // no can change data with object.freez
user1.age=25 // data was not update dua to object.freez
// console.log(user1);

// const tinderUser = new Object() // object constructor
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = { 
    email: "some@gmail.com",
    fullname: {                  // nested object
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

//  console.log(regularUser.fullname.userfullname.firstname);
//  console.log(regularUser.email);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2}  //merge two or more object with the help of 
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor  // this is access of object 

//this is access of object with modern way
const {courseInstructor: instructor} = course // destructure of object use in industry

// console.log(courseInstructor);
console.log(instructor);

       //json  
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]