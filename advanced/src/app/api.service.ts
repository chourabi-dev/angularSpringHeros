import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  constructor(private http:HttpClient) { }

  /*
  getPosts(){
    return this.http.get( environment.apiServer+'/posts' );
  }*/


  getMoviesList(){
    return this.http.get(environment.apiServer+'/api/v2/list_movies.json')
  }


  searchByQueryTerms(query){
    return this.http.get(environment.apiServer+'/api/v2/list_movies.json?query_term='+query)
    
  }

  getMovieById(id){
    return this.http.get(environment.apiServer+'/api/v2/movie_details.json?movie_id='+id)
  }

}
