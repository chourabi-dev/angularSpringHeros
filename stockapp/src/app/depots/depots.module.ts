import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepotsRoutingModule } from './depots-routing.module';
import { DepotsComponent } from './depots.component';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [DepotsComponent, ListComponent, AddComponent],
  imports: [
    CommonModule,
    DepotsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class DepotsModule { }
