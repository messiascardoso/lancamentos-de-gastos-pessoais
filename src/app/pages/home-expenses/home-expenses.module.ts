import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeExpensesRoutingModule } from './home-expenses-routing.module';
import { HomeExpensesComponent } from './home-expenses.component';
import { IconCategoryComponent } from 'src/app/shared/components/icon-category/icon-category.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { LaunchTypeDescriptionComponent } from 'src/app/shared/components/launch-type-description/launch-type-description.component';


@NgModule({
  declarations: [
    HomeExpensesComponent,
    IconCategoryComponent,
    LaunchTypeDescriptionComponent
  ],
  imports: [
    CommonModule,
    HomeExpensesRoutingModule,
    MaterialModule
  ],
  // schemas: [CUSTOM_ELEMENTS_SCHEMA ]
})
export class HomeExpensesModule { }
