//Slice
const foods= ["pizza","burger","fingerShips","donuts","springRoll"];
const modifiedFood=[foods.splice(1,4)]
console.log(modifiedFood);

//Splice
foods.splice(2,0,"noodles","icecream")
console.log(foods);

//Filter
const numberArray = [12,324,213,4,2,3,45,4234];
var even=numberArray.filter((num)=>num%2==0 )
console.log(even);

const isPrime1 = numberArray.filter(function(item){
    let prime = true;
    if(item>1){
        for(let i=2;i<item;i++){
            if(item%i == 0){
                prime = false;
                break;
            }
        }
        if(prime){
            return item;
        }
    }
})
console.log(isPrime1);

//Reject
const isPrime = n => {
    if (n===1){
    return false;
    }else if(n === 2){
       return true;
    }else{
       for(let i = 2; i < n; i++){
          if(n % i === 0){
             return false;
          }
       }
       return true;
    };
 };
 const filterPrime = numberArray => {
    const filtered = numberArray.filter(s => !isPrime(s));
    return filtered;
 };
 console.log(filterPrime(numberArray));

// Map

const myArray = [11, 34, 20, 5, 53, 16]
let findSquareOfNUmbers = myArray.map(function(item){
    return item*item;
});
console.log(findSquareOfNUmbers);

//Reduce
const myArray1 = [2, 3, 5, 10];
let multiplyArr = myArray1.reduce((multiply,item) => multiply*item);
console.log(multiplyArr);