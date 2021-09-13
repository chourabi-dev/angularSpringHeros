import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  searchForm = new FormGroup({
    query: new FormControl('')
  })

  movies = [];

  constructor( private api:ApiService ) { }

  ngOnInit(): void {
    this.api.getMoviesList().toPromise().then((res:any)=>{
      console.log(res);

      this.movies = res.data.movies;
    }).catch((err)=>{

    })
  }



  searchFor(){
    const q = this.searchForm.value.query;

     this.api.searchByQueryTerms(q).toPromise().then((res:any)=>{
       if (res.data.movies !== null ) {
         this.movies = res.data.movies
       }
     })
    
  }

}
