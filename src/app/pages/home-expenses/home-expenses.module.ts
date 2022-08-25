import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeExpensesRoutingModule } from './home-expenses-routing.module';
import { HomeExpensesComponent } from './home-expenses.component';
import { IconCategoryComponent } from 'src/app/shared/components/icon-category/icon-category.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { LaunchTypeDescriptionComponent } from 'src/app/shared/components/launch-type-description/launch-type-description.component';
import { ItemCategoryComponent } from 'src/app/shared/components/item-category/item-category.component';
import { CategoriesComponent } from '../categories/categories.component';
import { RegisterLaunchComponent } from './register-launch/register-launch.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomeExpensesComponent,
    IconCategoryComponent,
    LaunchTypeDescriptionComponent,
    CategoriesComponent,
    ItemCategoryComponent,
    RegisterLaunchComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HomeExpensesRoutingModule,
    MaterialModule
  ],
})
export class HomeExpensesModule { }
