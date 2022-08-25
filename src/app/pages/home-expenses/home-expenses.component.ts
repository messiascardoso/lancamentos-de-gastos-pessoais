import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { Launch } from 'src/app/shared/models/launchs';
import { RegisterLaunchComponent } from './register-launch/register-launch.component';

@Component({
  selector: 'app-home-expenses',
  templateUrl: './home-expenses.component.html',
  styleUrls: ['./home-expenses.component.scss']
})
export class HomeExpensesComponent implements OnInit {

  launchs:Launch[]= [
    {
      "idCategoria": "e4f7e894-18b7-4181-883b-2135d9ec3e17",
      "description": "Almoço na Padaria",
      "date": "21/10/2020",
      "value": 9.50
    },
    {
      "idCategoria": "e4f7e894-18b7-4181-883b-2135d9ec3e17",
      "description": "Almoço na Padaria",
      "date": "21/10/2020",
      "value": 22.50
    },
    {
      "idCategoria": "e4f7e894-18b7-4181-883b-2135d9ec3e17",
      "description": "Almoço na Padaria",
      "date": "21/10/2020",
      "value": 10.50
    },
    {
      "idCategoria": "e4f7e894-18b7-4181-883b-2135d9ec3e17",
      "description": "Almoço na Padaria",
      "date": "21/10/2020",
      "value": 29.50
    },
  ];

  constructor(private _bottomSheet: MatBottomSheet) { }

  ngOnInit(): void {
  }

  openBottomSheet(): void {
    this._bottomSheet.open(RegisterLaunchComponent);
  }

}
