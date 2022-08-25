import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';


/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-register-launch',
  templateUrl: './register-launch.component.html',
  styleUrls: ['./register-launch.component.scss']
})
export class RegisterLaunchComponent implements OnInit {

  formLaunch!: FormGroup;
  matcher = new MyErrorStateMatcher();

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.setFormgroup();
  }

  setFormgroup() {
    this.formLaunch = this.formBuilder.group({
      category: [''],
      type: [''],
      description: [null, Validators.required],
      date: null,
      value: null
    });
  }

  onSubmit() {
    console.log(this.formLaunch.value);
  }

}
