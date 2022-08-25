import { Launch } from './../../models/launchs';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-launch-type-description',
  templateUrl: './launch-type-description.component.html',
  styleUrls: ['./launch-type-description.component.scss']
})
export class LaunchTypeDescriptionComponent implements OnInit {

  constructor() { }

  @Input() launch!:Launch;
  @Output() eventDelete = new EventEmitter();
  @Output() eventEdit = new EventEmitter();

  ngOnInit(): void {
  }

  onDelete(event:any):void {
    this.eventDelete.emit();
  }

  onEdit() {
    this.eventEdit.emit();
  }

}
