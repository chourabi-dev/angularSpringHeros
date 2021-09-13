import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { MoviePageComponent } from './movie-page/movie-page.component';


const routes: Routes = [
  { path:"" , redirectTo:"home", pathMatch:"full" },
  { path:"home", component:HomePageComponent },
  { path:"movie/:id", component:MoviePageComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
