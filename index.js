//1. Addition

//Add all the values between 200 and 2700 (inclusively) that are divisible by 3 or 5, but not both 3 and 5. To solve this task you might want to use the modulus operator.

for (let index = 200; index <= 2700; index++) {

    if (index / 3 == 0 ) { 
    console.log(index)

}else(index % 5 == 0);
        console.log(index)
    }


//2. Shift the Values

//Given any array X, for example [2,1,6,4,-7], create an algorithm that shifts each number by one to the front. When your program is done the output for array [2,1,6,4,-7] should be [-7,4,6,1,2].

//  why it shows undefiend if I left length without -1 ?

let arr = [2,1,6,4,-7];

for (let  i = arr.length-1 ; i >= 0; i--){
 
  console.log(arr[i])
}


//3. FizzBuzz 
// Create an algorithm that inserts the numbers from 1 to 135 into an array, while replacing the values that are divisible by 3 with the word "Fizz", the numbers that are divisible by 5 with the word "Buzz", and the numbers that are divisible with 3 and 5 with the word "FizzBuzz". Your output should look like [1,2,'Fizz',4,'Buzz',5,'Fizz',7,8,...]


for(var i = 1; i <= 135; i++){
  if(i % 3 === 0 && i % 5 === 0){
  console.log("");

  } else if(i % 3 === 0){
  console.log("Fizz");
  
  } else if (i % 5 === 0){
  console.log("Buzz");
  
  } else {
  console.log(i);
  }
  }

 //4. Fibonacci
// For a fibonacci sequence starting at 0 and 1 add up all the values below 1,000,000.

let a = 0
let b = 1
let c = 1
console.log(a)
for (let index = 1; index <= 30; index++) {
  console.log(c);
  c = a + b;
  a = b 
  b = c
}

//5. Remove the Negative
//Given any array X, for example [1,-2,4,1], remove the negative numbers, so that the output becomes:[1,4,1].
 array = [1, -2, 4, 1];
array = array.filter(function(x) { 
    return x > -1; 
});
console.log(array);

//6. Communist Censorship
//Given the array of strings X = ['Man', 'I','Love','The','Matrix','Program'], replace every letter of the word

const x = ['Man', 'I','Love','The','Matrix','Program'];
// x[2]='*******'
// console.log(x)
x[5]='*******'
console.log(x)
