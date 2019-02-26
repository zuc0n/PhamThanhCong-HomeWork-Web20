// console.log("bye world");

// const constVar = "Hello";

// constVar = 123456;

//let var

// let a = 123456;

// var b = "abcdef";

// var arr = [1,2,3,4,5,"4332ewdf"];
// console.log(typeof a);
// console.log(typeof b);
// console.log(typeof c);
// console.log(arr);

// function aFunction(a, b, c){
//     console.log(a, b, c);
// }

// aFunction(10, "dafawfaw",);

// const bFunct = function () {
//     console.log("Hello");
// }

// const cFunct = () => {
//     console.log("World");
// }

// bFunct();
// cFunct();


// var a = 100;

// function print(){
//     var b = 50;

//     if(1+1 == 2){
//         var c = 5;

//         console.log(c);
//         console.log(a);
//         console.log(b);
//     }

//     console.log(c);
//     console.log(a);
//     console.log(b);
// }

// print()
// console.log(a);
// console.log(c);
// console.log(b);

// let => Block Scope


// let a = 100;

// function print(){
//     let b = 50;

//     if(1+1 == 2){
//         let c = 5;

//         console.log(c);
//         console.log(a);
//         console.log(b);
//     }

//     console.log(c);
//     console.log(a);
//     console.log(b);
// }

// print()
// console.log(a);
// console.log(c);
// console.log(b);

// function print(num, waitTime){
//     setTimeout(function(){
//         console.log(num);
//     }, 1000*waitTime)
// }


// function countDown(num) {
//     for(let i = num; i >= 1; i--){
//         print(i, num -i);
//     }
// }

// countDown(5);

console.log("Hello World");

function print(onWaitDone){
    setTimeout(function(){
        console.log("World");
        onWaitDone();
    }, 1000);
}

print(function(){
    console.log("!!!!!!!");    
})



// function aFunct(){
//     a = 10;
//     window.b = "A32raefaw";
// }

// aFunct();

// console.log(a);
// console.log(b);

// function aChocolate(){
//     console.log("So Sweet!!!!");
// }

// var myChocolate = aChocolate;
// myChocolate()

// console.log(typeof myChocolate);
