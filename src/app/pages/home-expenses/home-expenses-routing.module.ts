import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from '../categories/categories.component';
import { HomeExpensesComponent } from './home-expenses.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'lancamentos'
  },
  { path: 'lancamentos', component: HomeExpensesComponent },
  { path: 'categorias', component: CategoriesComponent },
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
