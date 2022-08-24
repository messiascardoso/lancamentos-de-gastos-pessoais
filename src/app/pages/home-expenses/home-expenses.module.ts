import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeExpensesRoutingModule } from './home-expenses-routing.module';
import { HomeExpensesComponent } from './home-expenses.component';


@NgModule({
  declarations: [
    HomeExpensesComponent
  ],
  imports: [
    CommonModule,
    HomeExpensesRoutingModule
  ]
})
export class HomeExpensesModule { }
