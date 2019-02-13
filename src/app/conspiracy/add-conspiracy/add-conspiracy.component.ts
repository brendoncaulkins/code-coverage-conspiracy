import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChange,
  SimpleChanges
} from '@angular/core'
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms'

import { Conspiracy } from 'src/app/models/conspiracy.model'
import { ConspiracyService } from 'src/app/services/conspiracy/conspiracy.service'

@Component({
  selector: 'app-add-conspiracy',
  templateUrl: './add-conspiracy.component.html',
  styleUrls: ['./add-conspiracy.component.css']
})
export class AddConspiracyComponent implements OnInit, OnChanges {
  @Input() conspiracy: Conspiracy

  formGroup: FormGroup
  editing: boolean

  constructor(
    private formBuilder: FormBuilder,
    private conspiracyService: ConspiracyService
  ) {
    this.formGroup = this.buildForm()
    this.editing = false
  }

  ngOnChanges(changes: SimpleChanges) {
    const conspiracyChange: SimpleChange = changes['conspiracy']
    if (conspiracyChange.currentValue) {
      this.configureForm(conspiracyChange.currentValue)
    }
  }

  ngOnInit() {
    // Always start clean
    this.resetForm()
  }

  buildForm(): FormGroup {
    return this.formBuilder.group({
      title: ['', [Validators.required, Validators.minLength(10)]],
      conspirators: this.formBuilder.array([], Validators.minLength(1)),
      details: ['', [Validators.required, Validators.maxLength(10000)]]
    })
  }

  configureForm(conspiracy: Conspiracy): void {
    this.editing = conspiracy && conspiracy.id !== null
    this.patchForm(conspiracy)
  }

  patchForm(conspiracy: Conspiracy): void {
    conspiracy.conspirators.forEach(() =>
      this.conspiratorsArrayField.push(this.formBuilder.control(''))
    )

    this.formGroup.patchValue(conspiracy)
  }

  resetForm(): void {
    // Clear form data and excess form controls
    this.formGroup.reset()
    while (this.conspiratorsArrayField.length > 1) {
      this.conspiratorsArrayField.removeAt(1)
    }

    // Reset data model
    this.conspiracy = new Conspiracy()
    this.conspiracy.conspirators.push(null)

    // Configure the form
    this.configureForm(this.conspiracy)
  }

  addConspirator() {
    if (this.conspiracy) {
      this.conspiratorsArrayField.push(this.formBuilder.control(''))
      this.conspiracy.conspirators.push(null)
    }
  }

  submitConspiracy(): void {
    // Build data to send
    const updatedConspiracy = {
      ...this.formGroup.value,
      id: this.editing ? this.conspiracy.id : null
    } as Conspiracy

    if (!this.editing) {
      this.conspiracyService.deleteConspiracy(updatedConspiracy.id)
    }

    this.conspiracyService.addConspiracy(updatedConspiracy)
    this.resetForm()
  }

  showErrors(control: FormControl): boolean {
    return control.invalid && control.touched
  }

  get titleField(): FormControl {
    return <FormControl>this.formGroup.get('title')
  }

  get conspiratorsArrayField(): FormArray {
    return <FormArray>this.formGroup.get('conspirators')
  }

  get detailsField(): FormControl {
    return <FormControl>this.formGroup.get('details')
  }
}
