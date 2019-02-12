import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formGroup: FormGroup

  constructor(private formBuilder: FormBuilder) {
    this.formGroup = this.buildForm()
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
        [Validators.required, Validators.minLength(8), Validators.maxLength(32)]
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
