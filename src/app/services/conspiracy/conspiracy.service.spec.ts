import { ConspiracyService } from './conspiracy.service'

describe('ConspiracyService', () => {
  let service: ConspiracyService

  beforeEach(() => {
    service = new ConspiracyService()
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
