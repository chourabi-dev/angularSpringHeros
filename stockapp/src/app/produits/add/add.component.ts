import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

 
  depots = [];

  add = new FormGroup({
    name : new FormControl('',Validators.required),
    price : new FormControl('',Validators.required),
    quantity : new FormControl('',Validators.required),
    depot : new FormControl('',Validators.required),
    
    
  })
  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.getDepotsList();
  }

  getDepotsList(){
    this.api.getListDepots().subscribe((res:any)=>{
      this.depots = res;
    })
  }

  addData(){
    console.log();

    this.api.addNewProduct(this.add.value).subscribe((res:any)=>{
      console.log(res);
      
      if (res) {
        history.back();
      }
      
    },(err)=>{
      console.log(err);
      
    })
    
  }


}
