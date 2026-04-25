import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IModel } from '../../../../Interfaces/Model';
import { InputComponent } from "../../../shared/input-component/input-component";
import { SelectComponent } from "../../../shared/select-component/select-component";
import { CheckboxComponent } from "../../../shared/checkbox-component/checkbox-component";
import { ISelectOptions } from '../../../../Interfaces/shared';
import { GetYears } from '../../../../Utils/GetYears';
import { MakeNamesList } from '../../../../Utils/GetMakeNames';
import { GetBodyTypes } from '../../../../Utils/GetBodyTypes';

@Component({
  selector: 'app-edit-model-form',
  imports: [ReactiveFormsModule, FormsModule, InputComponent, SelectComponent, CheckboxComponent],
  templateUrl: './edit-model-form.html',
  styleUrl: './edit-model-form.scss',
})
export class EditModelForm implements OnInit {

  /**
   *
   */
  constructor(private _MakeNamesList:MakeNamesList) {

    
  }

  @Input() editModelForm!: FormGroup;
  @Input() modelData !: IModel;
  yearFoundedOptions:ISelectOptions[] = [];
  makeNameOptions:ISelectOptions[] = [];
  bodyTypeOptions:ISelectOptions[] = [];

  ngOnInit(): void {
    this.yearFoundedOptions = GetYears.execute();
    this.bodyTypeOptions = GetBodyTypes.execute();
    this.editModelForm.get("makeName")?.disable()

    this._MakeNamesList.execute()
        .subscribe(data=>{
          if(data){
            this.makeNameOptions = data;
          }
        })
  }




}
