function isLeapYear(year){
    if((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0) ){
        return true;
    }
    else {
        return false;
    }
}

const yourYear = isLeapYear(2400);
console.log("is your year leap year?", yourYear);

