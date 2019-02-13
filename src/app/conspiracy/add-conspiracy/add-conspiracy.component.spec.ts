import { ComponentFixture, TestBed, async } from '@angular/core/testing'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AddConspiracyComponent } from './add-conspiracy.component'

describe('AddConspiracyComponent', () => {
  let component: AddConspiracyComponent
  let fixture: ComponentFixture<AddConspiracyComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddConspiracyComponent],
      imports: [FormsModule, ReactiveFormsModule]
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(AddConspiracyComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
