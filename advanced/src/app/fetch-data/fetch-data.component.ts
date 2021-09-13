import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html',
  styleUrls: ['./fetch-data.component.css']
})
export class FetchDataComponent implements OnInit {

  posts = [];

  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    /*this.api.getPosts().toPromise().then((success:any[])=>{
      console.log(success);
      
      this.posts = success;
      
    }).catch((err)=>{
      console.log(err);
      
    })*/
  }

}
