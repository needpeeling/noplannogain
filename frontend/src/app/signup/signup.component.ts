import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: [
    './styles/main.scss',
    './styles/body.scss',
  ]
})
export class SignupComponent implements OnInit {

  signupForm = this.fb.group({
    mail: ['', [Validators.required, Validators.email]],
    name: ['', [Validators.required]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    password_confirm: ['', [Validators.required, Validators.minLength(6)]]
  })

  constructor(private  fb: FormBuilder) { }

  ngOnInit(): void {
  }



  submitSignUpForm() {
    console.log(this.signupForm.value);
  }

  get mail() { return this.signupForm.get('mail'); }
  get name() { return this.signupForm.get('name'); }
  get password() { return this.signupForm.get('password'); }
  get password_confirm() { return this.signupForm.get('password_confirm'); }

}
