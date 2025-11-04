import { NumberToArray } from "./NumberToArray";
import { NumberListHandler } from "./NumberListHandler";


export  class NumberToString {

    static units: string[] = ["", "один", "два", "три", "чотири", "п'ять", "шість", "сім", "вісім", "дев'ять"];
    static teens: string[] = ["", "одинадцять", "дванадцять", "тринадцять", "чотирнадцять", "п'ятнадцять", "шістнадцять", "сімнадцять", "вісімнадцять", "дев'ятнадцять"];
    static tens: string[] = ["", "десять", "двадцять", "тридцять", "сорок", "п'ятдесят", "шістдесят", "сімдесят", "вісімдесят", "дев'яносто"];
    static hundreds: string[] = ["", "сто", "двісті", "триста", "чотириста", "п'ятсот", "шістсот", "сімсот", "вісімсот", "дев'ятсот"];

    static transformNumberToString(inputNumber: number): string {

        if (inputNumber > 0  && inputNumber <= 9999) {

            var mainList: number[] = NumberToArray.numberToArray(inputNumber)
            var size: number = mainList.length;
            switch (size) {
                case 1:
                    var result: string = NumberListHandler.handlerOneDigit(mainList, this.units)
                    console.log(result)
                    return result
                    break;
                case 2:
                    var result: string = NumberListHandler.handlerTwoDigit(mainList, this.units, this.teens, this.tens)
                    console.log(result)
                    return result
                    break 
                case 3:
                    var result: string = NumberListHandler.handlerThreeDigit(mainList, this.units, this.teens, this.tens, this.hundreds)
                    console.log(result)
                    return result 
                    break 
                case 4: // [9,9,9,9] = [9], [9,9,9]
                    var list1: number[] =  mainList.slice(0, 1); 
                    var list3: number[] = mainList.slice(1);
                    var oneDigit: string = NumberListHandler.handlerOneDigit(list1, this.units);
                    var threeDigit: string = NumberListHandler.handlerThreeDigit(list3, this.units, this.teens, this.tens, this.hundreds)
                    if (oneDigit == "один") {
                        result = oneDigit.replace("один", "одна тисяча ") + threeDigit
                        console.log(result)
                        return result
                    } else if (oneDigit == "два") {
                        result = oneDigit.replace("два", "дві тисячі ") + threeDigit
                        console.log(result)
                        return result    
                    } else if (oneDigit == "три" || oneDigit == "чотири") {
                        result = oneDigit + " тисячі " + threeDigit
                        console.log(result)
                        return result
                    } else 
                        result = oneDigit + " тисяч " + threeDigit
                        console.log(result)
                        return result
            }
        } else if  (inputNumber == 0) 
            console.log("нуль")
            return "нуль"

    }
    
}