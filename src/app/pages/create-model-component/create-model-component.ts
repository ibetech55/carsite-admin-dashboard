import { Component, OnInit } from '@angular/core';
import { CreateModelFormComponent } from "../../components/create-model/create-model-form-component/create-model-form-component";
import { FormControl, FormGroup } from '@angular/forms';
import { MakeService } from '../../services/make/make.service';
import { ISelectOptions } from '../../Interfaces/shared';
import { ModelService } from '../../services/model/model.service';
import { ICreateModel } from '../../Interfaces/Model';

@Component({
  selector: 'app-create-model-component',
  imports: [CreateModelFormComponent],
  templateUrl: './create-model-component.html',
  styleUrl: './create-model-component.scss',
})
export class CreateModelComponent implements OnInit {

  makeNameListOptions:ISelectOptions[] = [];

  constructor(private readonly _ModelService:ModelService , private readonly _MakeService:MakeService) {
  }


  ngOnInit(): void {
    this.getMakeNameList()
  }

  getMakeNameList(){
    this._MakeService.getMakeNameList()
      .subscribe(data=>{
        if(data){
          this.makeNameListOptions = data.map(d=>({
            value:d.makeCode,
            label:d.makeName
          }))
        }
      })
  }

  createModelForm = new FormGroup({
    modelName: new FormControl("", { nonNullable: true }),
    makeCode: new FormControl("", { nonNullable: true }),
    yearFounded: new FormControl("", { nonNullable: true }),
    bodyType: new FormControl<string[]>([], { nonNullable: true }),
  });

  onSubmit(){
    const requestBody:ICreateModel = {
      modelName: this.createModelForm.getRawValue().modelName,
      bodyType: this.createModelForm.getRawValue().bodyType,
      yearFounded: +this.createModelForm.getRawValue().yearFounded,
      makeCode: this.createModelForm.getRawValue().makeCode
    } 
    this._ModelService.createModel(requestBody)
          .subscribe(data=>{
            if(data){
              this.createModelForm.reset()
              alert("Done")
            }
          })
  }
}
