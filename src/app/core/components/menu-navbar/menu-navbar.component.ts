import { Component, Input, OnInit } from '@angular/core';
import { MenuItem } from 'src/app/shared/models/menu';

@Component({
  selector: 'app-menu-navbar',
  templateUrl: './menu-navbar.component.html',
  styleUrls: ['./menu-navbar.component.scss']
})
export class MenuNavbarComponent implements OnInit {

  @Input() menuList:MenuItem[]=[];

  constructor() { }

  ngOnInit(): void {
  }

}
