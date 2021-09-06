import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // relation direct server

  // DATABASE
  private data:any[] = [
    { id:1, name:"chourabi taher", email:"tchourabi@gmail.com" }
  ];

  constructor() { }

  insertData(data){
    // HTTP POST /employee/add
    
    this.data.push(data);
  }


  getData(){
    // HTTP GET /list/employee
    return this.data;
  }

  deleteById(id){
    for (let i = 0; i < this.data.length; i++) {
      const element = this.data[i];

      if (element.id == id) {
        this.data.splice(i,1);
      }
      
    }
  }
}
