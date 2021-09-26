import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css']
})
export class SidemenuComponent implements OnInit {

  menus = [
    {  title : "Depos", link:"/depots" , icon:"fas fa-boxes"  },
    {  title : "Produits", link:"/produits" , icon:"fas fa-box"  },
    {  title : "Clients", link:"/clients" , icon:"fas fa-users"  },
    
    

    
    
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
