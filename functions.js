//Given an array of strings, use a function to reverse all the elements in the string in ascending order and the specific elements in descending order.
let  arrT = ['Apple','Mango','Orange','Pineapple','Avocado','Berry'];
arrT.sort((x,y)=> x.toLowerCase() <y.toLowerCase() ? -1:1)
console.log('sorted Array Ascending',arrT)
arrT.sort((x,y)=>x.toLowerCase() <y.toLowerCase() ? 1:-1)
console.log('sorted Array Descending',arrT);

//Using JS functions and an array of numbers, return positive if an element within the array is positive, negative if an element is negative, else zero
function checkNumbers(x,Z){
    let positive_count = 0;
    let negative_count = 0;
    for(let i=0; i<Z; i++){
        if(x[i]>0){
            positive_count ++;
        }else{
            negative_count ++;
        }
    }

    if(positive_count===1){
        for(let i=0; i<Z; i++){
            if(x[i]>0){
                return x[i];
            }
        }
    }
    else if (negative_count===1){
        for (let i=0; i<Z; i++){
            if (x[i]<0){
                return x[i];
            }
        }
    }
    else{
        return 0;
    }
}
const arrNums = [8,9,1,6,5,-10,2,3];
const Z = arrNums.length;
console.log(checkNumbers(arrNums, Z));



//Given an array of objects, where each object represents an employee with an id, name,
// and salary property, write a function that returns a new array of employee objects sorted by their salary in ascending order.
let arrayOfObjects = [
    {"id":"xzy90078",
     "name":"Kamle Khan",
     "salary":49000 
    },
    {"id":"xpq9078",
     "name":"Tirumasu Ivan",
     "salary":48000 
    },
    {"id":"xzs9008",
     "name":"Kam kinti",
     "salary":9000 
    },
    {"id":"xty0078",
     "name":"Kamle Khan",
     "salary":4000 
    }
]
let sortedArrayOfOjects = arrayOfObjects.sort(
    (salary1,salary2) =>(salary1.salary < salary2.salary)? -1 : (salary1.salary > salary2.salary)? 1 : 0)
    console.log(sortedArrayOfOjects)

//Write a function that accepts an array of numbers and uses the forEach() method to console.log each number multiplied by 2.
const nums = [1,2,3,4,5,6,7,8,9,10];
let times2 = [];
nums.forEach(function(num) {
  times2.push(num*2);
})
console.log({times2});


//Write a function that takes in an array of numbers and consoles the first
// four items multiplied by 8 and the last two added by 5. Console the array with the new values
function multiply(arr, n) {
    var product = 8;
    n = arr.length;
    for (var i = 0; i < 3; i++) {
        product *= arr[i];
    }
    console.log(product);
  }
  
  multiply([1, 2, 3, 4,], 4);