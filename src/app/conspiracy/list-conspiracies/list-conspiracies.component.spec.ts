import { ConspiracyService } from 'src/app/services/conspiracy/conspiracy.service'
import { ListConspiraciesComponent } from './list-conspiracies.component'

describe('ListConspiraciesComponent', () => {
  let component: ListConspiraciesComponent

  beforeEach(() => {
    component = new ListConspiraciesComponent(
      new ConspiracyService() // Normally this would be a mock service
    )
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
