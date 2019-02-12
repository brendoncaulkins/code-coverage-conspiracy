import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'

import { AuthenticationService } from '../services/authentication/authentication.service'
import { Observable } from 'rxjs'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formGroup: FormGroup
  loggedIn: Observable<boolean>

  constructor(
    private formBuilder: FormBuilder,
    public authService: AuthenticationService
  ) {
    this.formGroup = this.buildForm()
    this.loggedIn = this.authService.getStatus()
    this.authService.logout()
  }

  ngOnInit() {}

  buildForm() {
    return this.formBuilder.group({
      username: [
        '',
        [Validators.required, Validators.minLength(5), Validators.maxLength(15)]
      ],
      password: [
        '',
        [Validators.required, Validators.minLength(6), Validators.maxLength(32)]
      ]
    })
  }

  showErrors(control: FormControl): boolean {
    return control.invalid && control.touched
  }

  get usernameField(): FormControl {
    return <FormControl>this.formGroup.get('username')
  }

  get passwordField(): FormControl {
    return <FormControl>this.formGroup.get('password')
  }
}
