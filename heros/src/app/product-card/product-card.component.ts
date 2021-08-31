import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  @Input() title;
  @Input() price;
  @Input() deletefn;
  @Input() i;

  

  constructor() { }

  ngOnInit(): void {
    
    
  }


  deleteFromParent(){
    this.deletefn(this.i);
  }



}
