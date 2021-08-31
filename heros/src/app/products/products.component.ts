import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  data = [
    { title:"Test product", price:15200  },
    { title:"Test product 2", price:15200  },
    { title:"Test product 3", price:15200  },
    { title:"Test product 4" , price:15200  },
    
  ]


  deleteItem(index){

    this.data.splice(index);
    
  }

  constructor() { }

  ngOnInit(): void {
    
  }

}
