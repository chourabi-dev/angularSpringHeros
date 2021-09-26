import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {

  /**
   * 	private Long produit;
	private Long client;  
	private int quantity;
   */


  produits = [];

  idClient;


  successMsg = '';


  add = new FormGroup({
    produit: new FormControl('',Validators.required),
    quantity: new FormControl('',Validators.required)
  })

  constructor(private api:ApiService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.idClient = this.route.snapshot.params.id;

    this.api.getListProduits().subscribe((res:any)=> this.produits = res )

  }



  addData(){
    const cmd = {
      produit: this.add.value.produit,
      client: this.idClient,
      quantity: this.add.value.quantity, 
    }

    this.api.newOrder(cmd).subscribe((res:any)=>{
      console.log(res);

      if (res.success) {
        this.successMsg = res.message
      }
      
    } )

  }

}
