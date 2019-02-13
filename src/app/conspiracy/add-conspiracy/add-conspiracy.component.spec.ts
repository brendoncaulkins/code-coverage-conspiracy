import { AddConspiracyComponent } from './add-conspiracy.component'
import { ConspiracyService } from 'src/app/services/conspiracy/conspiracy.service'
import { FormBuilder } from '@angular/forms'

describe('AddConspiracyComponent', () => {
  let component: AddConspiracyComponent

  beforeEach(() => {
    component = new AddConspiracyComponent(
      new FormBuilder(),
      new ConspiracyService() // Normally, this would be a mock service
    )
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
