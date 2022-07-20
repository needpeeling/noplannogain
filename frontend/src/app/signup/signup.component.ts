import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
    name: ['', [Validators.required, Validators.minLength(3)]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    password_confirm: ['', [Validators.required]]
  },
  {  
    validators: this.matchPassword('password', 'password_confirm')
  }
  )

  constructor(private  fb: FormBuilder) { }

  ngOnInit(): void {
  }

  submitSignUpForm() {
    console.log(this.signupForm.value);
  }

/**
 * If the password and password_confirm fields don't match, set the password_confirm field's errors to
 * { matchPassword: true }
 * @param {any} password - The name of the first password field.
 * @param {any} password_confirm - The name of the form control that you want to validate.
 * @returns A function that takes a FormGroup as an argument.
 */
  matchPassword(password:any, password_confirm:any) {
    return (fg: FormGroup) => {
      const passwordControl = fg.controls[password];
      const password_confirmControl = fg.controls[password_confirm];

      if(password_confirmControl.errors && !password_confirmControl.errors['matchPassword'])
        return;

      if(passwordControl.value !== password_confirmControl.value) {
        password_confirmControl.setErrors({ matchPassword: true });
      }
      else {
        password_confirmControl.setErrors(null);
      }
    }
  }

  get form() { return this.signupForm.controls; }
}
