import { AuthenticationService } from './authentication.service'

describe('AuthenticationService', () => {
  let service: AuthenticationService

  beforeEach(() => {
    service = new AuthenticationService()
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
