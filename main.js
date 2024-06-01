// let a=prompt('son kirit makaka')
// let b=prompt('yana son kirit makaka')

// if(a**2==b){
//     console.log(`${a} soning kvadrati ${b} ga teng`);
// } else{
//     console.log(`${a} soning kvadrati ${b} ga teng emas`);
// }

// console.log("5"===5)

let rannum=Math.floor(Math.random()*100)

console.log(rannum)

if (rannum % 15 == 0) {
    console.log("FizzBuzz")
} else if (rannum % 5 == 0) {
    console.log("Buzz")
} else if (rannum % 3 == 0) {
    console.log("Fizz")
} else {
    console.log("bu son 3 ta kategoriyaga tog'ri kelmaydi");
}