

export function getGenderXPath (gender: string): string {
        
        var maleXpath: string = 'label[for="gender-radio-1"]';
        var femaleXpath: string = 'label[for="gender-radio-2"]';
        var otherXpath: string = 'label[for="gender-radio-3"]';

        switch (gender) {
                case "Male":
                    return maleXpath;
                case "Female":
                    return femaleXpath;
                case "Other":
                    return otherXpath; 
                default:
                    console.log("Wrong value for gender radio button !!!")
                    return "Wrong gender selector";
                } 
                
}


export function getHobbiesXPath (hobby: string): string {
        
        var sportsXpath: string = 'label[for="hobbies-checkbox-1"]';
        var readingXpath: string = 'label[for="hobbies-checkbox-2"]';
        var musicXpath: string = 'label[for="hobbies-checkbox-3"]';

        switch (hobby) {
                case "Sports":
                    return sportsXpath;
                case "Reading":
                    return readingXpath;
                case "Music":
                    return musicXpath; 
                default:
                    console.log("Wrong value for hobbies checkbox !!!")
                    return "Wrong hobbies selector";
                } 
                
}