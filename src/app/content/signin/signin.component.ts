import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  login_form: FormGroup;

  constructor(private formBuild: FormBuilder) { }

  ngOnInit() {
    this.login_form = this.formBuild.group(
      {
        email: ['', [
          Validators.required,
          Validators.pattern(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zñA-ZÑ0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
        ]],
        password: ['', [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(15)
        ]]
      }
    );
  }

}
