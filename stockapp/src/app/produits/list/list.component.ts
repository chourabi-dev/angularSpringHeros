import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {


  produits = [];

  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.api.getListProduits().subscribe((res:any)=>{
      console.log(res);
      
      this.produits = res
    })
  }

  refresh(){
    this.api.getListProduits().subscribe((res:any)=>{
      console.log(res);
      
      this.produits = res
    })
  }


  deleteProduit(id){
    if (confirm("do you really want to delete this item ?")) {
      this.api.deleteProduit(id).subscribe((res)=>{ this.refresh() })
    }
  }

}
