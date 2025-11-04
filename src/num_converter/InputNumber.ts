import readline from "readline-sync";


export class InputNumber {

    
    static inputNumber (): number {
    
        while (true) {
            var input = readline.question("Enter number: ");
            var num = parseInt(input)          // string to number conversion
            if (!isNaN(num)) {                   //isNaN - check if it`s Not-a-Number;  !isNaN - check if it`s Number(true if its number)   
                console.log("The number you have entered is: " + num.toString())
                return num; 
            } 
            console.log("Not a number! Please put the number!")
        }
    }
}