import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

import { AppMaterialModule } from './../shared/app-material/app-material.module';
import { SharedModule } from './../shared/shared.module';
import { ListFormComponent } from './list-form/list-form.component';
import { ListRoutingModule } from './list-routing.module';
import { ListComponent } from './list/list.component';



@NgModule({
  declarations: [
    ListComponent,
    ListFormComponent
  ],
  imports: [
    CommonModule,
    ListRoutingModule,
    AppMaterialModule,
    SharedModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatButtonModule
  ]
})
export class ListModule { }
