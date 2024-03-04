import { Component, OnInit } from '@angular/core';
import { RecipeServiceService } from './service/recipe-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  sortValue:string=""
  page:number=1;
  recipeDetails:any=[]
  sortedDeatils:any=[]
  searchKey:string=""
  constructor(private api:RecipeServiceService){}
  ngOnInit(): void {
      this.getAllRecipeDetails()
  }
  getAllRecipeDetails(){
    this.api.getAllReciepeDetails().subscribe({
      next:(res:any)=>{
        this.recipeDetails=res.recipes
      },
      error:(reason:any)=>{
        console.log(reason);
        
      }
    })
  }
  onSearchKey(event:any){
    this.searchKey=event
    if(event){
      this.page=1
    }
  }
  onSortKey(event:any){
   this.sortedDeatils=this.recipeDetails.filter((item:any)=>
      item.mealType.includes(event)
    )
  }
}
