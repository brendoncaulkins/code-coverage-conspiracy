import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { TestBed, async } from '@angular/core/testing'

import { AddConspiracyComponent } from '../conspiracy/add-conspiracy/add-conspiracy.component'
import { AuthenticationService } from '../services/authentication/authentication.service'
import { HomeComponent } from './home.component'
import { ListConspiraciesComponent } from '../conspiracy/list-conspiracies/list-conspiracies.component'
import { LoginComponent } from '../login/login.component'

describe('HomeComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HomeComponent,
        LoginComponent,
        AddConspiracyComponent,
        ListConspiraciesComponent
      ],
      imports: [FormsModule, ReactiveFormsModule],
      providers: [AuthenticationService]
    }).compileComponents()
  }))

  it('should create the app', () => {
    const fixture = TestBed.createComponent(HomeComponent)
    const app = fixture.debugElement.componentInstance
    expect(app).toBeTruthy()
  })
})
