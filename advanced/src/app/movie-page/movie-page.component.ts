import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-movie-page',
  templateUrl: './movie-page.component.html',
  styleUrls: ['./movie-page.component.css']
})
export class MoviePageComponent implements OnInit {

  id;
  isLoading = true;

  movie =null;

  constructor(private route:ActivatedRoute,private api:ApiService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;

    console.log(this.id);
    
    this.getMoviesDetails();
  }


  getMoviesDetails(){
    this.api.getMovieById(this.id).toPromise().then((res:any)=>{
      console.log(res);

      if (res.data.movie) {
          this.movie = res.data.movie;
          this.isLoading = false
      }
      
    }).catch((err)=>{

    })
  } 






}
