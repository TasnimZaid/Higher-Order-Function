
// // Ask the user to input the number to array :
// let array = [] ;

// while(true){
// var input = prompt('enter randon number and if you done write done !') ;

// if(input == 'done'){
//   break ;
// }
// else{
//       array.push(input) ;
     
    
// }

// }
// console.log(array.join(','));

// // pow the input by foreach :


// newarray = [] ;
// array.forEach((input) => {
 
//   power = Math.pow(2 , input) ;
//   newarray.push(power) ;

// });
// console.log(newarray.join(','));

// pow by for loop :

// for(i=0 ; i <= array.length ; i++){
//   newarray.push(Math.pow(2 , array[i])) ;

// }


// // pow by map : 
// let newArray = array.map(num => Math.pow(2, num));

// console.log(newArray.join(','));


// Q2 : 

// array = [1,2,3,4,5,"Rawan"] ; 
// let newarray = []; 

// array.forEach(element => {
//   if (element % 2 === 0) {
//     newarray.push('even');
//   } else if(element % 2 == 1) {
//     newarray.push('odd');
//   }
//  else {
//   newarray.push('NAN');
// }
// });

// console.log(newarray);

// Q3 : Use forEach to  Return all the names in the array 
//  [“Rawan", "Wesam", "Hind", "Muhammad", "Esraa", “Dareen”]
//  using loops.

// let newarray = ["Rawan", "Wesam", "Hind", "Muhammad", "Esraa", "Dareen"]

// newarray.forEach(element => {
//     console.log(element);
// });

function fizzbuzz(numbers) {
  let output = numbers.map(number => {
    if (number % 3 === 0 && number % 5 === 0) {
      return "Fizz Buzz";
    } else if (number % 3 === 0) {
      return "Fizz";
    } else if (number % 5 === 0) {
      return "Buzz";
    } else {
      return number;
    }
  });

  return output;
}

// Example usage:
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15];
let result = fizzbuzz(numbers);
console.log(result);
