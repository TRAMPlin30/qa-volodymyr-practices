


export class Address {
  currentAddress: string;
  state: string;
  city: string;
  [key: string]: string; //для того что б TypeScript понимал, что у Address могут быть только строковые ключи, и что все значения только строки (string)
                         //иначе ниже в fill(obj.address[key]) уже в тестах при обращении к данному объекту (при переборе его полей/свойств) 
                         //будет ошибка в цикле for...in...

  /*
  for (const key  in obj.address) {
                    //Current address selection
                    
                    await page.getByPlaceholder("Current Address").fill(obj.address[key]);
  */


constructor(currentAddress: string, state: string, city: string) {

  this.currentAddress = currentAddress;
  this.state = state;
  this.city = city;
}


}