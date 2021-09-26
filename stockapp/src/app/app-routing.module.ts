import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'depots', loadChildren: () => import('./depots/depots.module').then(m => m.DepotsModule) },
   { path: 'produits', loadChildren: () => import('./produits/produits.module').then(m => m.ProduitsModule) },
  { path: 'clients', loadChildren: () => import('./clients/clients.module').then(m => m.ClientsModule) }
  
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
