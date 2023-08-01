// Date & Time


let myDate = new Date()
// console.log(myDate); //Mon Jul 31 2023 00:07:52 GMT+0530 (India Standard Time) 
// console.log(myDate.toString()); // 
// console.log(myDate.toISOString());
// console.log(myDate.toUTCString());
// console.log(myDate.toDateString());// Mon Jul 31 2023
// console.log(myDate.toJSON());


// const myCreatedDate = new Date("11-01-2023") // mm-dd-yy
const myCreatedDate = new Date("01-21-2023") 
// console.log(myCreatedDate.toLocaleString());
// console.log(myCreatedDate.toString());

myCreatedDate.toLocaleString('default',{
    calendar: 'India'
})

//    +++++++++++++++++ Time Stamp ++++++++++++++++++++++++++++++

let myTimeStamp =Date.now()
// console.log(myTimeStamp);// by default milisecond
// console.log(myCreatedDate.getTime());// by default milisecond
// console.log(Math.floor(Date.now()/1000)); // convert into sec
