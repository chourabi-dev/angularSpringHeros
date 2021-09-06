import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';
import { DataPreviewComponent } from './data-preview/data-preview.component';
import { DataComponent } from './data/data.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { OurClientsComponent } from './our-clients/our-clients.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { ProfileComponent } from './profile/profile.component';


const routes: Routes = [
  { path:'', redirectTo:'home', pathMatch:'full' },
  { path:"home" , component:HomeComponent },
  
  { path:"about" , component:AboutComponent, children:[
    { path:'', component:OurClientsComponent },
    { path:'our-clients', component:OurClientsComponent },
    { path:'our-services', component:OurServicesComponent },
  ] },
  { path:"contacts" , component:ContactsComponent},
  { path:"data" , component:DataComponent},
  { path:"data-preview" , component:DataPreviewComponent},
  
  { path:'profile/:id/:name', component:ProfileComponent },
  { path:"**" , component: NotFoundComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
