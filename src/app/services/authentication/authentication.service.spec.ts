import { AuthenticationService } from './authentication.service'
import { filter } from 'rxjs/operators'

describe('AuthenticationService', () => {
  let service: AuthenticationService

  beforeEach(() => {
    service = new AuthenticationService()
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })

  describe('status updates', () => {
    it('should be true on login', () => {
      service.login('user', 'pass')
      expect(service.status.value).toBe(true)
    })
    it('should be false on logout', () => {
      service.logout()
      expect(service.status.value).toBe(false)
    })
  })

  describe('getStatus()', () => {
    it('should reflect the status cache', done => {
      service
        .getStatus()
        .pipe(filter(v => v)) // squelch the default false
        .subscribe(status => {
          expect(status).toBe(true)
          done()
        })
      service.status.next(true)
    })
  })

  describe('login()', () => {
    it('should fire an API call...')
  })

  describe('logout()', () => {
    it('should destroy the current session', () => {
      service.logout()
      expect(service.status.value).toBe(false)
    })
  })
})
