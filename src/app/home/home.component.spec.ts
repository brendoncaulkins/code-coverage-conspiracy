import { AuthenticationService } from '../services/authentication/authentication.service'
import { HomeComponent } from './home.component'

describe('HomeComponent', () => {
  let component: HomeComponent
  beforeEach(() => {
    component = new HomeComponent(
      new AuthenticationService() // Normally this would be a mock service
    )
  })

  it('should create the app', () => {
    expect(component).toBeTruthy()
  })
})
