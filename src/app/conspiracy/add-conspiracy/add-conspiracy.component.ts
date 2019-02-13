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
    this.configureForm(conspiracyChange.currentValue)
  }

  ngOnInit() {
    this.conspiracy = new Conspiracy()
    this.addConspirator()
    this.configureForm(this.conspiracy)
  }

  configureForm(conspiracy: Conspiracy): void {
    this.editing = conspiracy && conspiracy.id !== null
    this.patchForm(conspiracy)
  }

  buildForm(): FormGroup {
    return this.formBuilder.group({
      title: ['', [Validators.required, Validators.minLength(10)]],
      conspirators: this.formBuilder.array([], Validators.minLength(1)),
      details: ['', [Validators.required, Validators.maxLength(10000)]]
    })
  }

  patchForm(conspiracy: Conspiracy): void {
    conspiracy.conspirators.forEach(() =>
      this.conspiratorsArrayField.push(this.formBuilder.control(''))
    )
    this.formGroup.patchValue(conspiracy)
  }

  addConspirator() {
    if (this.conspiracy) {
      this.conspiratorsArrayField.push(this.formBuilder.control(''))
      this.conspiracy.conspirators.push(null)
    }
  }

  submitConspiracy(): void {
    if (!this.editing) {
      this.conspiracyService.addConspiracy(this.formGroup.value as Conspiracy)
    } else {
      const updatedConspiracy = this.formGroup.value as Conspiracy
      updatedConspiracy.id = this.conspiracy.id
      this.conspiracyService.deleteConspiracy(updatedConspiracy.id)
      this.conspiracyService.addConspiracy(updatedConspiracy)
    }

    this.resetForm()
    this.editing = false
  }

  resetForm(): void {
    this.formGroup.reset()
    this.conspiracy.conspirators = [null]
    while (this.conspiratorsArrayField.length > 1) {
      this.conspiratorsArrayField.removeAt(1)
    }
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
