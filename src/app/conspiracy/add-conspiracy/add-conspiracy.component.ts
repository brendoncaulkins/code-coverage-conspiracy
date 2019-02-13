import { Component, Input, OnInit } from '@angular/core'
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms'

import { Conspiracy } from 'src/app/models/conspiracy.model'

@Component({
  selector: 'app-add-conspiracy',
  templateUrl: './add-conspiracy.component.html',
  styleUrls: ['./add-conspiracy.component.css']
})
export class AddConspiracyComponent implements OnInit {
  @Input() conspiracy: Conspiracy

  formGroup: FormGroup

  constructor(private formBuilder: FormBuilder) {
    this.formGroup = this.buildForm()
  }

  ngOnInit() {
    if (this.conspiracy) {
      this.updateForm(this.conspiracy)
    } else {
      this.conspiracy = { conspirators: [] } as Conspiracy
      this.addConspirator()
    }
  }

  buildForm(): FormGroup {
    return this.formBuilder.group({
      title: ['', [Validators.required, Validators.minLength(10)]],
      conspirators: this.formBuilder.array([], Validators.minLength(1)),
      details: ['', [Validators.required, Validators.maxLength(10000)]]
    })
  }

  updateForm(conspiracy: Conspiracy): void {
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
    console.log(this.formGroup.value as Conspiracy)
    this.resetForm()
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
