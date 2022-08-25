import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Category } from '../../models/category';

@Component({
  selector: 'app-item-category',
  templateUrl: './item-category.component.html',
  styleUrls: ['./item-category.component.scss']
})
export class ItemCategoryComponent implements OnInit {

  @Input() categoryItem!:Category;
  @Output() eventDelete = new EventEmitter();
  @Output() eventEdit = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
