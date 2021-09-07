import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AuthGuard } from './auth.guard';
import { ContactsComponent } from './contacts/contacts.component';
import { DataPreviewComponent } from './data-preview/data-preview.component';
import { DataComponent } from './data/data.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { OurClientsComponent } from './our-clients/our-clients.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { ProfileComponent } from './profile/profile.component';


const routes: Routes = [
  { path:'', redirectTo:'home', pathMatch:'full' },
  { path:"home" , component:HomeComponent , canActivate:[AuthGuard]},
  { path:"login" , component:LoginComponent  },
  
  
  { path:"about" , component:AboutComponent, canActivate:[AuthGuard],  children:[
    { path:'', component:OurClientsComponent },
    { path:'our-clients', component:OurClientsComponent },
    { path:'our-services', component:OurServicesComponent },
  ] },
  { path:"contacts", canActivate:[AuthGuard] , component:ContactsComponent},
  { path:"data", canActivate:[AuthGuard] , component:DataComponent},
  { path:"data-preview", canActivate:[AuthGuard] , component:DataPreviewComponent},
  
  { path:'profile/:id/:name', canActivate:[AuthGuard], component:ProfileComponent },


  { path: 'employees', canActivate:[AuthGuard], loadChildren: () => import('./employees/employees.module').then(m => m.EmployeesModule) },




  { path:"**" , component: NotFoundComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
