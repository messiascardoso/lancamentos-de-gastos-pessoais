import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterLaunchComponent } from './register-launch.component';

describe('RegisterLaunchComponent', () => {
  let component: RegisterLaunchComponent;
  let fixture: ComponentFixture<RegisterLaunchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterLaunchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterLaunchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
