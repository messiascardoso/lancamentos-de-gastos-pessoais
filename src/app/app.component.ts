import { Component } from '@angular/core';
import { MenuItem } from './shared/models/menu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'lancamentos-gastos-pessoais';
  menuList:MenuItem[] = [
    {
      name: 'Lançamentos',
      path: 'lancamentos',
      icon: 'list_alt'
    },
    {
      name: 'Categorias',
      path: 'categorias',
      icon: 'category'
    }
  ]

}
