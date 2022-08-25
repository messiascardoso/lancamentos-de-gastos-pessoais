import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-icon-category',
  templateUrl: './icon-category.component.html',
  styleUrls: ['./icon-category.component.scss']
})
export class IconCategoryComponent implements OnInit {

  @Input() iconName = '';
  @Input() color='';
  constructor() { }

  ngOnInit(): void {
  }

}
