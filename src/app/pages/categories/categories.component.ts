import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { Category } from 'src/app/shared/models/category';
import { RegisterLaunchComponent } from '../home-expenses/register-launch/register-launch.component';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  categories: Category[] = [
    {
        "id": "23d8826a-3e12-4025-b0a1-bdc08fdb606d",
        "name": "Alimentação"
    },
    {
        "id": "59955474-b1e2-4fda-aa20-daf98ea93f1e",
        "name": "Transporte"
    },
    {
        "id": "06d65a27-f65d-4fc0-b2ae-a937e9cfbbc7",
        "name": "Viagens"
    }
];

  constructor( private _bottomSheet: MatBottomSheet ) { }

  ngOnInit(): void {
  }

  openBottomSheet(): void {
    this._bottomSheet.open(RegisterLaunchComponent);
  }

}
