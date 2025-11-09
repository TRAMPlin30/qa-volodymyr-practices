

export class Student {

    id: number[];
    name: string[];
    email: string[];
    gender: string[];
    mobile: string[];
    birthDate: string[];
    subjects: string[];
    hobbies: string[];
    pictures?: any[];
    address: string[];
    state: string[];
    city: string[];

    constructor(id: number[], name:string[], email:string[], gender: string[], mobile:string[], birthDate:string[],
                 subjects:string[], hobbies:string[], address:string[], state:string[], city:string[]) {
        this.id = id
        this.name = name;
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
}