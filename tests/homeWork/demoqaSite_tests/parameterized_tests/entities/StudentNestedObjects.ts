import { Address } from "./Address";


export class StudentInnerAddr {

    id: number;
    name: string;
    email: string;
    gender: string;
    mobile: string;
    birthDate: string;
    subjects: string;
    hobbies: string;
    pictures?: any;
    address: Address;

    constructor(id: number, name:string, email:string, gender: string, mobile:string, birthDate:string,
                 subjects:string, hobbies:string, address:Address) {
        this.id = id
        this.name = name;
        this.email = email;
        this.gender = gender;
        this.mobile = mobile;
        this.birthDate = birthDate;
        this.subjects = subjects;
        this.hobbies = hobbies;
        this.address = address;
    }
}