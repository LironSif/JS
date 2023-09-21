let leapYear = (year) => {
    if(year%4 === 0 ) {
        if(year%100 === 0 && year%400 !== 0){
            console.log( "This is not a leap year");
        }else{
            console.log('this is indeed a leap year')
        }
    }
}
leapYear(2400)
