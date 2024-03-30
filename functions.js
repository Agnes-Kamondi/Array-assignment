//Given an array of strings, use a function to reverse all the elements in the string in ascending order and the specific elements in descending order.
function reverseStrings(arr, indices){
    arr.map(str => str.split('').reverse().join(''));
    indices.forEach(index => {
        if (index >= 0 && index < arr.length){
            arr[index] = arr[index].split('').reverse().join('');
        }
    });

    return arr;
}
let strings = ["banana","pineapple","strawberry","apple","mango"];
let indicesToReverse = [0,2];
let result = reverseStrings(strings,indicesToReverse);
console.log(result);

//Using JS functions and an array of numbers, return positive if an element within the array is positive, negative if an element is negative, else zero
function checkArray(arr){
    const isPositive = arr.some(num => num > 0);
    const isNegative = arr.some(num => num < 0);
    if(isPositive && isNegative){
        return 0;
    } else if (isPositive){
        return 'positive';
    } else if(isNegative){
        return 'negative';
    } else{
        return 0;
    }
}
const num1 = [3,4,5,6,7,8];
console.log(checkArray(num1));
const num2 = [4,-5,10,-76,100];
console.log(checkArray(num2));
const num3 = [-3,-2,-1,-7,-6];
console.log(checkArray(num3));



//Given an array of objects, where each object represents an employee with an id, name,
// and salary property, write a function that returns a new array of employee objects sorted by their salary in ascending order.
function sortEmployeesBySalaryAscending(employees){
    return employees.sort((a,b) => a.salary - b.salary);
}
let employees =[
    {ID: 25241244, name: "Emily Awinja",salary: 100000},
    {ID: 35342319, name:"Reign Kaiden",salary: 900000},
    {ID: 39325332, name:"Phenomenal Ndiawa",salary:800000}
]; 
let sortedEmployees = sortEmployeesBySalaryAscending(employees);
console.log(sortedEmployees);

//Write a function that accepts an array of numbers and uses the forEach() method to console.log each number multiplied by 2.
const nums = [1,2,3,4,5,6,7,8,9,10];
let nums2 = [];
nums.forEach(function(num) {
  nums2.push(num*2);
})
console.log({nums2}); 


//Write a function that takes in an array of numbers and consoles the first
// four items multiplied by 8 and the last two added by 5. Console the array with the new values
function manipulateArray(numbers){
    for(let i = 0; i < 4 && i < numbers.length; i++){
        numbers[i] *= 8;
    }
    for(let i = numbers.length -2; i < numbers.length; i++){
        if (i >= 0){
            numbers[i] += 5;
        }
    }
    console.log(numbers);
}
let numbers = [1,2,3,4,5,6,7,8];
manipulateArray(numbers);