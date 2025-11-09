import { Address } from "./Address";


export class StudentNestedObjects {

    id: number;
    firstName: string;
    lastName: string;
    email: string;
    gender: string;
    mobile: string;
    birthDate: string;
    subjects: string[];
    hobbies: string;
    pictures?: any;
    address: Address;
    

    constructor(id: number, firstName:string, lastName:string, email:string, gender: string, mobile:string, birthDate:string, subjects:string[], hobbies:string, address:Address) {
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
        
    }
}