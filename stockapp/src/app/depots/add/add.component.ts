import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  add = new FormGroup({
    name : new FormControl('',Validators.required),
    address : new FormControl('',Validators.required),
    
  })
  constructor(private api:ApiService) { }

  ngOnInit(): void {
  }

  addData(){
    console.log();

    this.api.addNewDepot(this.add.value).subscribe((res:any)=>{
      if (res.id) {
        history.back();
      }
      
    },(err)=>{
      console.log(err);
      
    })
    
  }

}
