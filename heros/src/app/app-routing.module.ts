import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { OurClientsComponent } from './our-clients/our-clients.component';
import { OurServicesComponent } from './our-services/our-services.component';


const routes: Routes = [
  { path:'', redirectTo:'home', pathMatch:'full' },
  { path:"home" , component:HomeComponent },
  
  { path:"about" , component:AboutComponent, children:[
    { path:'', component:OurClientsComponent },
    { path:'our-clients', component:OurClientsComponent },
    { path:'our-services', component:OurServicesComponent },
  ] },
  { path:"**" , component: NotFoundComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
