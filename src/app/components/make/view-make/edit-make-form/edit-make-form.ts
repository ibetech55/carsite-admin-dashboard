import { Component, Input, OnInit } from '@angular/core';
import { IMakeCodeResponse } from '../../../../Interfaces/Make';
import { InputComponent } from "../../../shared/input-component/input-component";
import { SelectComponent } from "../../../shared/select-component/select-component";
import { ISelectOptions } from '../../../../Interfaces/shared';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GetYears } from '../../../../Utils/GetYears';
import { GetCountries } from '../../../../Utils/GetCountries';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { CheckboxComponent } from "../../../shared/checkbox-component/checkbox-component";

@Component({
  selector: 'app-edit-make-form',
  imports: [InputComponent, SelectComponent, ReactiveFormsModule, FormsModule, MatCheckboxModule, CheckboxComponent],
  templateUrl: './edit-make-form.html',
  styleUrl: './edit-make-form.scss',
})
export class EditMakeForm implements OnInit {
  @Input() makeData!: IMakeCodeResponse;
  @Input() editMakeForm!: FormGroup;
  yearFoundedOptions: ISelectOptions[] = [];
  countriesOptions:ISelectOptions[] = [];

  /**
   *
   */
  constructor(private readonly _GetCountries:GetCountries) {
  }

  ngOnInit(){
    this.yearFoundedOptions = GetYears.execute();

    this._GetCountries.execute()
      .subscribe(data=>{
        if(data){
          this.countriesOptions = data
        }
      })
  }
}
