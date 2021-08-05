function isEven(even){
if(even%2 == 0){
    return true;
}
return false;
}

const myNumber = isEven(3234);
console.log("Is my number Even? ", myNumber);

function isOdd(odd){
    if(odd%2 != 0){   // another condition if(odd%2 == 1){return true;}
        return true;
    }
    return false;
}

const herNumber = isOdd(123);

console.log("Is her number odd?", herNumber);