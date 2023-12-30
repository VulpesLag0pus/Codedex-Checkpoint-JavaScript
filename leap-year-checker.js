for (let i = 2000; i <= 3000; i++){
//Checking if the year is a leap year
    if (i % 4 == 0 && i % 100 != 0 || i % 400 == 0){
//Logging the leap years in the console
        console.log(i)
    }
}
