import { Component, EventEmitter, Input, Output } from '@angular/core';
import { InputComponent } from "../../shared/input-component/input-component";
import { SelectComponent } from "../../shared/select-component/select-component";
import { ButtonComponent } from "../../shared/button-component/button-component";
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ISelectOptions } from '../../../Interfaces/shared';

@Component({
  selector: 'app-create-model-form-component',
  imports: [InputComponent, SelectComponent, ButtonComponent, FormsModule, ReactiveFormsModule],
  templateUrl: './create-model-form-component.html',
  styleUrl: './create-model-form-component.scss',
})
export class CreateModelFormComponent {
  @Input() createModelForm!: FormGroup;
  @Input() makeNameListOptions!: ISelectOptions[]
  @Output() onSubmitEmitter = new EventEmitter();

  yearFoundedOptions: ISelectOptions[] = [];
  bodyStyleOptions: ISelectOptions[] = [
    { value: "Sedan", label: "Sedan" },
    { value: "Truck", label: "Truck" },
  ];

  ngOnInit() {
    this.getYearsList();
  }

  getYearsList() {
    const currentYear = new Date().getFullYear()
    for (let i = currentYear; i >= 1950; i--) {
      this.yearFoundedOptions.push({
        label: i.toString(),
        value: i.toString()
      })
    }
  }

  handleSubmit() {
    this.onSubmitEmitter.emit();
  }
}
