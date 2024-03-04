import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecipeServiceService {
  SERVER_URL:string="https://dummyjson.com/recipes"
  constructor(private http:HttpClient) { }
  getAllReciepeDetails(){
    return this.http.get(this.SERVER_URL)
  }
}
