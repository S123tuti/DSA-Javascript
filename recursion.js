function factorial(a){
    if(a==0)
return 1
return a*factorial(a-1)
}
let data = 5
console.log(factorial(data));

// =================================================Indirect Recursion==============================================================================

let money = 100;
let apple = 0;

function buyApple(x){
    if(x>0){
        console.log("I have", x , "Rs", apple);
        buyMore(x-10)
    }else{
        console.log("I don't have more money to buy", apple);
    }
}

function buyMore(x){
    apple++;
    buyApple(x-10)
    console.log(x);
}
buyApple()
console.log(x);

// ===============================================================================================================================================
// let arr = [1,2,3]
// arr[10] = 4
// console.log(arr.length);
// =================================================================================================================================================

function color(){

};

function days(){

color()

};


function fruits(){

days()

};

function buyFruits(){

fruits()

};

// ==================================How to reverse in recursion================================================================================

let arr = [2,4,6,9,0,1,3,5,7];
let temp;
function reverse(arr, start, last){
    if(start<=last){
        temp = arr[start];
        arr[start]=arr[last]
        arr[last]=temp;
        reverse(arr, start+1, last-1)
        }
}

reverse(arr, 0, arr.length-1)