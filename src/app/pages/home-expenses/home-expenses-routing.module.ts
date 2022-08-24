import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeExpensesComponent } from './home-expenses.component';

const routes: Routes = [
  { path: '', component: HomeExpensesComponent },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeExpensesRoutingModule { }
