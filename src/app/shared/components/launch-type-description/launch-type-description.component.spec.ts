import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchTypeDescriptionComponent } from './launch-type-description.component';

describe('LaunchTypeDescriptionComponent', () => {
  let component: LaunchTypeDescriptionComponent;
  let fixture: ComponentFixture<LaunchTypeDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaunchTypeDescriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchTypeDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
