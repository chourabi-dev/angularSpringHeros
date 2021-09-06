import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  data:any[];


  addForm = new FormGroup({
    id:new FormControl('',Validators.required),
    name:new FormControl('',Validators.required),
    email:new FormControl('',Validators.required),
    
  })

  constructor(private dataService:DataService,private router:Router) { }

  ngOnInit(): void {
    this.data = this.dataService.getData();
  }


  add(){
     this.dataService.insertData(this.addForm.value);

     this.addForm.reset();
  }

  delete(id){
    if (confirm('do you really want to delete this item ?')) {
      this.dataService.deleteById(id);
    }
  }
}
