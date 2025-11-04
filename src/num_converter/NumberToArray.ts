
export class NumberToArray {

       
        static numberToArray(num: number): number[] {

            var str: string = num.toString();                     //convert number 123 to string '123'
            var listString: string[] = Array.from(str);           //convert string "123" to array ["1", "2", "3"]
            var ListNumbers: number[] = listString.map(Number);   //convert ["1", "2", "3"] to [1, 2, 3]
            console.log("List of numbers has been created: " + "["+listString+"]")
            return ListNumbers;

        }


}