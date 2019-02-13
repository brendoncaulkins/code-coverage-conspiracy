import { Conspiracy } from 'src/app/models/conspiracy.model'
import { ConspiracyService } from './conspiracy.service'
import { Observable } from 'rxjs'
import { filter } from 'rxjs/operators'

describe('ConspiracyService', () => {
  let service: ConspiracyService

  beforeEach(() => {
    service = new ConspiracyService()
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })

  it('should allow listening for updates', () => {
    expect(service.getConspiracies() instanceof Observable).toBe(true)
  })

  describe('addConspiracy()', () => {
    it('should add a new element to the list', done => {
      const size = service.conspiracies.value.length
      service
        .getConspiracies()
        .pipe(filter(v => v.length !== size)) // squelch
        .subscribe(list => {
          expect(list.length).toBe(size + 1)
          done()
        })
      service.addConspiracy(new Conspiracy())
    })
    it('should give the new conspiracy an id', done => {
      const size = service.conspiracies.value.length
      service
        .getConspiracies()
        .pipe(filter(v => v.length !== size)) // squelch
        .subscribe(list => {
          list.forEach(c => {
            expect(c.id).not.toBeNull()
          })
          done()
        })
      service.addConspiracy(new Conspiracy())
    })
  })

  describe('deleteConspiracy()', () => {
    it('should delete by ID', () => {
      expect(service.conspiracies.value).toContain(
        jasmine.objectContaining({ id: 1 })
      )
      service.deleteConspiracy(1)
      expect(service.conspiracies.value).not.toContain(
        jasmine.objectContaining({ id: 1 })
      )
    })
  })
})
