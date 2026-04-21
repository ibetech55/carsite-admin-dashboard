import { Component, EventEmitter, Input, OnChanges, OnInit, Output, output, SimpleChanges } from '@angular/core';
import { InputComponent } from "../../../shared/input-component/input-component";
import { ButtonComponent } from "../../../shared/button-component/button-component";
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SelectComponent } from "../../../shared/select-component/select-component";
import { ISelectOptions } from '../../../../Interfaces/shared';
import { ICountry } from '../../../../Interfaces/Location';
import { FileInputComponent } from "../../../shared/file-input-component/file-input-component";

@Component({
  selector: 'app-create-make-form',
  imports: [FileInputComponent, InputComponent, ButtonComponent, ReactiveFormsModule, FormsModule, SelectComponent, FileInputComponent],
  templateUrl: './create-make-form.html',
  styleUrl: './create-make-form.scss',
})
export class CreateMakeForm implements OnInit, OnChanges {
  @Output() submitFormEmitter = new EventEmitter<void>();
  @Output() onChangeMakeLogoEmitter = new EventEmitter<File>();
  @Input() createMakeForm!: FormGroup;
  @Input() countries!: ICountry[];

  countryOptions: ISelectOptions[] = [];
  yearFoundedOptions: ISelectOptions[] = [];

  onChangeMakeLogo(value:File){
    this.onChangeMakeLogoEmitter.emit(value);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['countries'] && this.countries?.length) {
      this.setCountries();
    }
  }

  ngOnInit(): void {
    this.getYears();
  }

  getYears() {
    const currentYear = new Date().getFullYear()
    for (let i = currentYear; i >= 1950; i--) {
      this.yearFoundedOptions.push({
        value: i.toString(),
        label: i.toString()
      })
    }
  }

  setCountries() {
    this.countryOptions = this.countries.map(country => ({
      value: country.name,
      label: country.name
    }))
  }
  handleSubmit() {
    this.submitFormEmitter.emit();
  }
}
