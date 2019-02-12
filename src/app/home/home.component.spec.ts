import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { TestBed, async } from '@angular/core/testing'

import { AuthenticationService } from '../services/authentication/authentication.service'
import { HomeComponent } from './home.component'
import { LoginComponent } from '../login/login.component'

describe('HomeComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent, LoginComponent],
      imports: [FormsModule, ReactiveFormsModule],
      providers: [AuthenticationService]
    }).compileComponents()
  }))

  it('should create the app', () => {
    const fixture = TestBed.createComponent(HomeComponent)
    const app = fixture.debugElement.componentInstance
    expect(app).toBeTruthy()
  })

  it(`should have as title 'code-coverage-conspiracy'`, () => {
    const fixture = TestBed.createComponent(HomeComponent)
    const app = fixture.debugElement.componentInstance
    expect(app.title).toEqual('code-coverage-conspiracy')
  })

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(HomeComponent)
    fixture.detectChanges()
    const compiled = fixture.debugElement.nativeElement
    expect(compiled.querySelector('h1').textContent).toContain(
      'Welcome to code-coverage-conspiracy!'
    )
  })
})
