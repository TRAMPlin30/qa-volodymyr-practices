

export class Student {

    id: number;
    firstName: string;
    lastName: string;
    email: string;
    gender: string;
    mobile: string;
    birthDate: string;
    subjects: string;
    hobbies: string;
    pictures?: any;
    address: string;
    state: string;
    city: string;

    constructor(id: number, firstName:string, lastName:string, email:string, gender: string, mobile:string, birthDate:string, subjects:string, hobbies:string, address:string, state:string, city:string) {
        this.id = id
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.gender = gender;
        this.mobile = mobile;
        this.birthDate = birthDate;
        this.subjects = subjects;
        this.hobbies = hobbies;
        this.address = address;
        this.state = state;
        this.city = city;
    }

    getGenderXPath (gender: string): string {
        
        var maleXpath: string = "//input[@id='gender-radio-1']";
        var femaleXpath: string = "//input[@id='gender-radio-2']";
        var otherXpath: string = "//input[@id='gender-radio-3']";

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
                

}}