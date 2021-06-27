// alert("hello")
// document.getElementById("test").innerHTML - "100"


// const x = 11
// if(x === 10){
// console.log('x is 10')
// }else if(x>10 ){
//     console.log('x is greater than 10')
// }

// else{
//     console.log('x is not 10')

// }



// pseudo code
//code 
// Diagram


//1. Print 1 - 135

//Ten ways to count from 1 to 135

//first way 

// {
//     let counter = 1;
//     while (counter < 136 ){
//         console.log(counter)
//         counter++;
//     }
// }

//secound way 

{
    for (let i = 1; i < 136; i++){
        console.log(i);
    }
}

//third way 

// {
//     let counter =1;
// do {
//     console.log(counter);
//     counter++;
// }
// while (counter < 136);
// }

//fourth way 

// {
//     function recurseMe(num) {
//         if (num >135) {
//             return;
//         }
//         console.log(num)
//         recurseMe(++num)
//     }
//     recurseMe(1);
// }

//way number five 

// {
//     [...Array(136).keys()].forEach(num => console.log(num));

// }

//way number six

// {
//     Array.apply(null,{length: 136}).map(Number.call, Number).forEach(num =>console.log(num) )
// }

//.........complete the other four ways later

//2. Print Odd Numbers 1 - 135

//Diagram
// i = 1 > print : 1
// i = 2 > print : 1, 2
// i = 3 > print : 1, 3
// i = 4 > print : 1, 4
//..
//..
//..
// i = 135 > print : 1,2,3,4,...,135 
// i = 136 > The loop will stop because  136>135 


//2. Print Odd Numbers 1 - 135

    for ( let i=1 ;i<136; i++){
        if(i % 2 !=0)
        console.log(i);
}

// Diagram
//i%1 !=0 => print  : 1
//i%2 !=0 => the loop will not print
//i%3 !=0 => print  : 1,3
//i%4 !=0 => the loop will not print
//...
//...
// i%135 !=0 => print  : 1,3,5,.....,135
// i%136 !=0=> stop print becouse 136>135



//3. Sum of Printed Numbers

var i=0
for (var  n =1 ; n <=135; n++){
    i=i+n
    console.log(i)
 }

 // Diagram
// i=0   (0+0) > print 0
// i=1   (1+0) > print 1
// i=2   (2+1) > print 3
//................
//................
// i =135 (135 +9045 )>> print 9180



 //4. Print the elements of an array

 let arr = [1,4,2,12];

for(let i = 0; i < arr.length; i++){
  console.log(arr[i]);
}

 //5. Find Max
 //X = [2,-3,-1]

 const array = [2, -3, -1];
 console.log(Math.max(...array));
 
 //6. Get Average
 // X = [2,1,3]

 var grades = [2,1,3]
 var total = 0;
 for(var i = 0; i < grades.length; i++) {
     total += grades[i];
 }
 var avg = total / grades.length;
 console.log(avg)

 //7. Eliminate the Negatives
 
//  let array = [2,-1,4,-3]
//  for(let array = 0; array < array .length; array ++) { 
//  }
//  console.log(array[array])

 //8. Number to String
 function turnNeg (){
    const negArray =[1,-1,3,-5]
    for (let i=0;i<negArray.length;i++){
        if(negArray[i]<0){
            negArray[i]="Turning"
        } 
    }
    console.log(negArray) 
   } 
   turnNeg()




