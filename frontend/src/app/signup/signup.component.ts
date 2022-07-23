import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { DialogComponent } from '../dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';


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

  constructor(
    private  fb: FormBuilder, private userservice: UserService, private dialog: MatDialog,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  /**
  * The function takes the form data and sends it to the server. If the server returns an error, the
  * error message is displayed in a dialog box. If the server returns a success message, the user is
  * redirected to his profile
  */
  submitSignUpForm() {
    this.userservice.signUp(this.signupForm.value).subscribe((res)=>{
      if(res.err) {
        let error_message:string;
        switch(res.err.errno) {
          case 1062:
            let key_words = res.err.sqlMessage.match(/(['"]).*?\1/g);
            let entity = key_words[1].replaceAll("'", "");
            let duplicate = key_words[0];
            error_message = `${duplicate} already exists! Please choose another ${entity}!`;
            break;
          default:
            error_message = res.err.sqlMessage;
            break;
        }
        this.dialog.open(DialogComponent, {data: {message: error_message}});
      }
      else {
        this.userservice.UID = res.data.insertId;
        this.router.navigate(['/', this.signupForm.value.name], { queryParams: { name: this.signupForm.value.name} });
      }
    });  
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
