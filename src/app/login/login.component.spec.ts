import { AuthenticationService } from '../services/authentication/authentication.service'
import { FormBuilder } from '@angular/forms'
import { LoginComponent } from './login.component'

describe('LoginComponent', () => {
  let component: LoginComponent

  beforeEach(() => {
    component = new LoginComponent(
      new FormBuilder(),
      new AuthenticationService() // Normally this would be a mock service
    )
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
