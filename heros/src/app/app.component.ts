import { Component } from '@angular/core';
import { Employee } from './employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  email:string="tchourabi@gmail.com";

  fruits:string[] = ['apples','orange','bannas','water malone'];

  /*employees = [
    { fullname:"chourabi taher", email:"tchourabiàgmail.com",phone:'93863732' },
    { fullname:"chourabi taher", email:"tchourabiàgmail.com",phone:'93863732' },
    { fullname:"chourabi taher", email:"tchourabiàgmail.com",phone:'93863732' },
    { fullname:"chourabi taher", email:"tchourabiàgmail.com",phone:'93863732' },
    { fullname:"chourabi taher", email:"tchourabiàgmail.com",phone:'93863732' },
    { fullname:"chourabi taher", email:"tchourabiàgmail.com",phone:'93863732' },
    { fullname:"chourabi taher", email:"tchourabiàgmail.com",phone:'93863732' },
    { fullname:"chourabi taher", email:"tchourabiàgmail.com",phone:'93863732' },
    { fullname:"chourabi taher", email:"tchourabiàgmail.com",phone:'93863732' },
    { fullname:"chourabi taher", email:"tchourabiàgmail.com",phone:'93863732' },
    { fullname:"chourabi taher", email:"tchourabiàgmail.com",phone:'93863732' },
    
  ];*/


  employees:Employee[] = [
    new Employee('chourabi taher','email@email.com','12233666'),
    new Employee('chourabi taher','email@email.com','12233666'),
    new Employee('chourabi taher','email@email.com','12233666'),
    new Employee('chourabi taher','email@email.com','12233666'),
    new Employee('chourabi taher','email@email.com','12233666'),
    new Employee('chourabi taher','email@email.com','12233666'),
    new Employee('chourabi taher','email@email.com','12233666'),
    
  ]


}
