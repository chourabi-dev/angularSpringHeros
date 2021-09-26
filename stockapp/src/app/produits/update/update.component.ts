import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  depots = [];

  add = new FormGroup({
    name : new FormControl('',Validators.required),
    price : new FormControl('',Validators.required),
    quantity : new FormControl('',Validators.required),
    depot : new FormControl('',Validators.required),
    
    
  })

  id;

  constructor(private api:ApiService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.getDepotsList();
    this.id = this.route.snapshot.params.id;

    this.getOldData();
  }

  getDepotsList(){
    this.api.getListDepots().subscribe((res:any)=>{
      this.depots = res;
    })
  }


  getOldData(){
    this.api.findProduitById(this.id).subscribe((res:any)=>{
      console.log(res);

      this.add.setValue({
        name : res.name,
        price :   res.price,
        quantity :  res.quantity,
        depot :   res.depot.id,
      })
      
    })
  }

  updateData(){
    console.log();

    let formDATA = this.add.value;

    let data = {
      name : formDATA.name,
      price :   formDATA.price,
      quantity :  formDATA.quantity,
      depot :   formDATA.depot,
      id:this.id
      
    }
    this.api.updateProduit(data).subscribe((res:any)=>{
      console.log(res);
      
      if (res) {
        history.back();
      }
      
    },(err)=>{
      console.log(err);
      
    })
    
  }
}
