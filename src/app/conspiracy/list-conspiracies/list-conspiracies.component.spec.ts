import { Conspiracy } from 'src/app/models/conspiracy.model'
import { ConspiracyService } from 'src/app/services/conspiracy/conspiracy.service'
import { ListConspiraciesComponent } from './list-conspiracies.component'
import { filter } from 'rxjs/operators'

describe('ListConspiraciesComponent', () => {
  let component: ListConspiraciesComponent
  let conspiracyService: ConspiracyService

  beforeEach(() => {
    conspiracyService = new ConspiracyService() // Normally this would be a mock service
    component = new ListConspiraciesComponent(conspiracyService)
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  describe('conspiracies list', () => {
    it('should reference the ConspiracyService', done => {
      const size = conspiracyService.conspiracies.value.length
      const conspiracy = new Conspiracy()
      conspiracy.title = 'This test will not work'
      component.conspiracies
        .pipe(filter(l => l.length !== size))
        .subscribe(list => {
          expect(list).toContain(
            jasmine.objectContaining({ title: conspiracy.title })
          )
          done()
        })
      conspiracyService.addConspiracy(conspiracy)
    })
    it('should be sorted by title', () => {
      spyOn(component, 'sortByTitle').and.callThrough()
      component.conspiracies.subscribe()
      conspiracyService.addConspiracy(new Conspiracy())
      expect(component.sortByTitle).toHaveBeenCalled()
    })
  })

  describe('sortByTitle()', () => {
    let conspiracyA: Conspiracy
    let conspiracyB: Conspiracy

    beforeEach(() => {
      conspiracyA = new Conspiracy()
      conspiracyA.title = 'aardvark'

      conspiracyB = new Conspiracy()
      conspiracyB.title = 'birch'
    })
    it('should return -1 when items are in order', () => {
      expect(component.sortByTitle(conspiracyA, conspiracyB)).toBe(-1)
    })
    it('should return 1 when items are out of order', () => {
      expect(component.sortByTitle(conspiracyB, conspiracyA)).toBe(1)
    })
    it('should return 0 when the items are the same', () => {
      expect(component.sortByTitle(conspiracyA, conspiracyA)).toBe(0)
    })
    it('should be safe against null titles', () => {
      const nullConspiracy = new Conspiracy()
      expect(nullConspiracy.title).toBeNull()
      expect(component.sortByTitle(nullConspiracy, nullConspiracy)).toBe(0)
    })
  })
})
