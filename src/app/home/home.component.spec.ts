import { AuthenticationService } from '../services/authentication/authentication.service'
import { Conspiracy } from '../models/conspiracy.model'
import { HomeComponent } from './home.component'
import { Subject } from 'rxjs'

describe('HomeComponent', () => {
  let component: HomeComponent
  let authService: AuthenticationService
  beforeEach(() => {
    authService = new AuthenticationService() // Normally this would be a mock service
    spyOn(authService, 'logout').and.callThrough()
    component = new HomeComponent(authService)
  })

  it('should create the app', () => {
    expect(component).toBeTruthy()
  })

  it('should store a title', () => {
    expect(component.title).toBe('code-coverage-conspiracy')
  })

  it('should support edit events', () => {
    expect(component.editConspiracy instanceof Subject).toBe(true)
  })

  it('should keep track of the logged in status', done => {
    component.loggedIn.subscribe(status => {
      expect(status).toBe(false) // The default status on startup
      done()
    })
  })

  it('should call logout()', () => {
    expect(authService.logout).toHaveBeenCalled()
  })
})
