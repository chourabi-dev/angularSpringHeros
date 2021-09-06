import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  id;

  // false
  //route  = new ActivatedRoute();

  // injection

  constructor( private route:ActivatedRoute ) { }

  ngOnInit(): void {
    console.log(this.route);
    const id = this.route.snapshot.params.test;
    
    this.id = id;
    
  }

  getUserData(){
    // HTTP GET > id
  }

}
