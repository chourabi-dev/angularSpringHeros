import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }


  /** depot */


  // add

  public addNewDepot(depotData){
    return this.http.post( environment.api +'/depot/add',depotData);
  }


  // list

  public getListDepots(){
    return this.http.get(environment.api +'/depot/list')
  }



  /*************************************produits******************************************** */

  public getListProduits(){
    return this.http.get(environment.api +'/produit/list')
  }


  public findProduitById(id){
    return this.http.get(environment.api +'/produit/details/'+id)
  }

  public deleteProduit(id){
    return this.http.delete(environment.api +'/produit/delete/'+id)
  }

  public addNewProduct(produit){
    return this.http.post( environment.api +'/produit/add',produit);
  }

  public updateProduit(produit){
    return this.http.post( environment.api +'/produit/update',produit);
  }



  /***********************************clients******************** */
  
  public getClientsList(){
    return this.http.get(environment.api +'/clients/list')
  }


  public newOrder(data){
    return this.http.post( environment.api +'/sells//add',data);
  }

  

}
