import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-item-category',
  templateUrl: './item-category.component.html',
  styleUrls: ['./item-category.component.scss']
})
export class ItemCategoryComponent implements OnInit {

  @Input() category = {};
  @Output() eventDelete = new EventEmitter();
  @Output() eventEdit = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
