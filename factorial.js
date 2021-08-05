// var number = 1;

// function  factorial(fact) {
//     let i=fact;
// while( i >= 1){

//     number = number * i;
//     console.log(i);
//     i--;
// }
//        return number;
// }



var number = 1;

function  factorial(fact) {

    for(let i= fact; i>=1; i--){
        number = number * i;
    }
       return number;
}




console.log(factorial(7));




