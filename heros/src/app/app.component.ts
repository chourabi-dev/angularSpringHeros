import { Component, OnDestroy, OnInit } from '@angular/core';
import { Employee } from './employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  email:string="tchourabi@gmail.com";

  fruits:string[] = ['apples','orange','bannas','water malone'];

  /*employees = [
    { fullname:"chourabi taher", email:"tchourabiàgmail.com",phone:'93863732' },
    { fullname:"chourabi taher", email:"tchourabiàgmail.com",phone:'93863732' },
    { fullname:"chourabi taher", email:"tchourabiàgmail.com",phone:'93863732' },
    { fullname:"chourabi taher", email:"tchourabiàgmail.com",phone:'93863732' },
    { fullname:"chourabi taher", email:"tchourabiàgmail.com",phone:'93863732' },
    { fullname:"chourabi taher", email:"tchourabiàgmail.com",phone:'93863732' },
    { fullname:"chourabi taher", email:"tchourabiàgmail.com",phone:'93863732' },
    { fullname:"chourabi taher", email:"tchourabiàgmail.com",phone:'93863732' },
    { fullname:"chourabi taher", email:"tchourabiàgmail.com",phone:'93863732' },
    { fullname:"chourabi taher", email:"tchourabiàgmail.com",phone:'93863732' },
    { fullname:"chourabi taher", email:"tchourabiàgmail.com",phone:'93863732' },
    
  ];*/

/*
  employees:Employee[] = [
    new Employee('chourabi taher','email@email.com','12233666'),
    new Employee('chourabi taher','email@email.com','12233666'),
    new Employee('chourabi taher','email@email.com','12233666'),
    new Employee('chourabi taher','email@email.com','12233666'),
    new Employee('chourabi taher','email@email.com','12233666'),
    new Employee('chourabi taher','email@email.com','12233666'),
    new Employee('chourabi taher','email@email.com','12233666'),
    
  ]*/

  /*
 
  

  parf = "hello world <strong>this is Angular</strong>";

  test = (new Date().getTime() % 2 === 0) ? 'red' : 'blue';


  canClick:boolean = false*/;
/*

  imgURL = [
    "https://img.freepik.com/free-vector/colorful-palm-silhouettes-background_23-2148541792.jpg?size=626&ext=jpg&ga=GA1.2.2045755189.1629763200",
    'https://p4.wallpaperbetter.com/wallpaper/500/442/354/outrun-vaporwave-hd-wallpaper-preview.jpg',
    'https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__340.jpg'
  ];
  width = 250;
  selectedIndex = 0;
  next(){

  

    console.log("next");
    this.selectedIndex++;
    if (this.selectedIndex === this.imgURL.length) {
      this.selectedIndex = 0;
    }
  }
  previous(){
 
    console.log("previous");
    this.selectedIndex--;
    if (this.selectedIndex === -1) {
      this.selectedIndex = ( this.imgURL.length - 1 );
    }
    
  }

  getImgURL(){
    return this.imgURL[this.selectedIndex];
  }*/


  /*hours = 0;
  minuts = 0;
  seconds = 0;*/


  data = [
    { montant: 58000000 , date: new  Date() , id:"15224-sks" , description : "custom sale", phone:"11552233" },
    { montant: 15.19 , date: new  Date() , id:"15224-sks" , description : "custom sale",phone:"11552233" },
    { montant: 180.16 , date: new  Date() , id:"15224-sks" , description : "custom sale",phone:"11552233" },
    { montant: 188.500 , date: new  Date() , id:"15224-sks" , description : "custom sale",phone:"11552233" },
    { montant: 1000 , date: new  Date() , id:"15224-sks" , description : "custom sale",phone:"11552233" },
    
  ];

  constructor(){}


  /*formatCurrency(currency:number,param:string){
    return currency+' '+param;
  }


  formatDate(date:Date){
    return date.getFullYear()+'/'+(date.getMonth()+1)+"/"+date.getDate();
  }*/
 
  ngOnInit(): void {
    // init 
    /*    const date = new Date();
        this.hours = date.getHours();
        this.minuts = date.getMinutes();
        this.seconds = date.getSeconds();

    setInterval(
      ()=>{
        const date = new Date();
        this.hours = date.getHours();
        this.minuts = date.getMinutes();
        this.seconds = date.getSeconds();
      }, 1000
    )*/
  }
 
 
 






}
