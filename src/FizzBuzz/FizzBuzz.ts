

var values: number[] = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

for (var value of values) {
    if (value % 5 === 0 && value % 3 === 0) {
        console.log("FizzBuzz")
    } else if (value % 5 === 0 ) {
        console.log("Buzz")
    } else if (value % 3 === 0) {
        console.log("Fizz")
    } else {
        console.log(value)
    }
}