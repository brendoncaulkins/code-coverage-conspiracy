import { FormBuilder, FormControl, FormGroup } from '@angular/forms'

import { AuthenticationService } from '../services/authentication/authentication.service'
import { LoginComponent } from './login.component'

describe('LoginComponent', () => {
  let component: LoginComponent

  beforeEach(() => {
    component = new LoginComponent(
      new FormBuilder(),
      new AuthenticationService() // Normally this would be a mock service
    )
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should have a formGroup', () => {
    expect(component.formGroup instanceof FormGroup).toBe(true)
  })

  describe('buildForm()', () => {
    it('should have a username control', () => {
      expect(component.buildForm().contains('username')).toBe(true)
    })
    it('should have a password control', () => {
      expect(component.buildForm().contains('password')).toBe(true)
    })
  })

  describe('username control', () => {
    let control: FormControl

    beforeEach(() => {
      control = component.usernameField
    })
    it('should be accessible', () => {
      expect(control).toEqual(<FormControl>component.formGroup.get('username'))
    })
    it('should be required', () => {
      control.setValue(null)
      expect(control.invalid).toBe(true)
      expect(control.hasError('required')).toBe(true)
    })
    it('should require at least 5 characters', () => {
      control.setValue('user')
      expect(control.invalid).toBe(true)
      expect(control.hasError('minlength')).toBe(true)
      expect(control.getError('minlength')).toEqual(
        jasmine.objectContaining({ actualLength: 4, requiredLength: 5 })
      )
    })
    it('should not allow more than 15 characters', () => {
      control.setValue('u'.repeat(16))
      expect(control.invalid).toBe(true)
      expect(control.hasError('maxlength')).toBe(true)
      expect(control.getError('maxlength')).toEqual(
        jasmine.objectContaining({ actualLength: 16, requiredLength: 15 })
      )
    })
  })

  describe('password control', () => {
    let control: FormControl

    beforeEach(() => {
      control = component.passwordField
    })
    it('should be accessible', () => {
      expect(control).toEqual(<FormControl>component.formGroup.get('password'))
    })
    it('should be required', () => {
      control.setValue(null)
      expect(control.invalid).toBe(true)
      expect(control.hasError('required')).toBe(true)
    })
    it('should require at least 5 characters', () => {
      control.setValue('user')
      expect(control.invalid).toBe(true)
      expect(control.hasError('minlength')).toBe(true)
      expect(control.getError('minlength')).toEqual(
        jasmine.objectContaining({ actualLength: 4, requiredLength: 6 })
      )
    })
    it('should not allow more than 15 characters', () => {
      control.setValue('u'.repeat(33))
      expect(control.invalid).toBe(true)
      expect(control.hasError('maxlength')).toBe(true)
      expect(control.getError('maxlength')).toEqual(
        jasmine.objectContaining({ actualLength: 33, requiredLength: 32 })
      )
    })
  })

  describe('showErrors()', () => {
    it('should return false if the control is INVALID and UNTOUCHED', () => {
      component.usernameField.setValue('user')
      expect(component.usernameField.invalid).toBe(true)
      expect(component.usernameField.touched).toBe(false)
      expect(component.showErrors(component.usernameField)).toBe(false)
    })

    it('should return true if the control is INVALID and TOUCHED', () => {
      component.usernameField.setValue('user')
      component.usernameField.markAsTouched()
      expect(component.usernameField.invalid).toBe(true)
      expect(component.usernameField.touched).toBe(true)
      expect(component.showErrors(component.usernameField)).toBe(true)
    })

    it('should return false if the control is VALID and UNTOUCHED', () => {
      component.usernameField.setValue('username')
      expect(component.usernameField.valid).toBe(true)
      expect(component.usernameField.touched).toBe(false)
      expect(component.showErrors(component.usernameField)).toBe(false)
    })

    it('should return false if the control is VALID and TOUCHED', () => {
      component.usernameField.setValue('username')
      component.usernameField.markAsTouched()
      expect(component.usernameField.valid).toBe(true)
      expect(component.usernameField.touched).toBe(true)
      expect(component.showErrors(component.usernameField)).toBe(false)
    })
  })
})
