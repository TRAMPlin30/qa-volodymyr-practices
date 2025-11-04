
export class NumberListHandler {


    static handlerOneDigit(numbersList: number[], units: string[]): string {

        var numFirst: number = numbersList[0]!;  // [1] index=0 
        var word: string = units[numFirst]!; 
            return word;
    }



    static handlerTwoDigit(numbersList: number[], units: string[], teens: string[], tens: string[]): string {
        var numFirst: number = numbersList[0]!;
        var numSecond: number = numbersList[1]!;
        if (numFirst >= 1 && numSecond == 0) {
            return (tens[numFirst]!)   //10,20,30,40 etc.

        } else 
            if (numFirst == 1 && numSecond > 0) {
                return (teens[numSecond]!)   //11,12,13,14 etc.
            }
            else  return (tens[numFirst] + " " + units[numSecond])
    }


    static handlerThreeDigit(numbersList: number[], units: string[], teens: string[], tens: string[], hundreds: string[]): string {
        var numFirst: number = numbersList[0]!;
        var numSecond: number = numbersList[1]!;
        var numThird: number = numbersList[2]!;
        if (numFirst>= 1 && numSecond == 0 && numThird == 0) {
            return (hundreds[numFirst]!);       //100 - 900
        } else if (numFirst == 1 && numSecond == 0 && numThird > 0) {
            return (hundreds[numFirst] + " " + units[numThird]);  //101 - 109
        } else if (numThird == 0) {
            return (hundreds[numFirst] + " " + tens[numSecond]);  //110, 120, 130...190 
        } else if (numSecond == 1 && numThird > 0) {
            return (hundreds[numFirst] + " " + teens[numThird]);  //111, 112, 113...119
        } else 
            return (hundreds[numFirst] + " " + tens[numSecond] + " " + units[numThird] + " ")
    }


    static handleThousandsEnding(str1: string,  str2: string) {
        if (str1 !== " ") {
            if (str1 == " один") {
                console.log(str1.replace(" один", " одна тисяча") + str2)
            } else if (str1 == " два ") {
                console.log(str1.replace(" два ", " дві тисячі") + str2)
            } else if (str1 == " три " || str1 == " чотири " ) {
                console.log(str1 + " тисячі " + str2)
            } else {
                console.log(str1 + " тисяч " + str2)
            }    
        } else console.log(str2)
    }

}