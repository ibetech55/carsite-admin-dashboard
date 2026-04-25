import { Component, OnInit, ViewChild } from '@angular/core';
import { ModelService } from '../../services/model/model.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IEditModelRequestBody, IModel, IModels } from '../../Interfaces/Model';
import { CommonModule } from '@angular/common';
import { ModelDetails } from '../../components/models/model-details/model-details';
import { DialogFormComponent } from "../../components/shared/dialog-form-component/dialog-form-component";
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-model-details-component',
  imports: [CommonModule, ModelDetails, DialogFormComponent],
  templateUrl: './model-details-component.html',
  styleUrl: './model-details-component.scss',
})
export class ModelDetailsComponent implements OnInit {
  private modelCode: string = "";
  public modelData$!: Observable<IModel>;
  public data!: IModel;
  public EDIT_DIALOG_TITLE: string = "";
  public EDIT_MODEL_CONFIRM_MESSAGE: string = "";
  @ViewChild(DialogFormComponent) _DialogForm!: DialogFormComponent<IModel>;

  editModelForm = new FormGroup({
    modelName: new FormControl("", { nonNullable: true }),
    makeName: new FormControl("", { nonNullable: true }),
    bodyType: new FormControl<string[]>([], { nonNullable: true }),
    yearFounded: new FormControl("", { nonNullable: true }),
    active: new FormControl(false, { nonNullable: true })
  })

  constructor(private readonly _ModelService: ModelService, private readonly _Router: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.modelCode = this._Router.snapshot.paramMap.get("modelCode") ?? ""
    this.getModel();
  }

  getModel() {
    this.modelData$ = this._ModelService.getModelByModelCode(this.modelCode);
    this.modelData$.subscribe(data => {
      if (data) {
        this.EDIT_DIALOG_TITLE = `${data.make.makeName} ${data.modelName}`;
        this.EDIT_MODEL_CONFIRM_MESSAGE = `Are you sure you want to make changes to model <strong>${data.modelName}</strong>?`;
        this.editModelForm.setValue({
          modelName: data.modelName,
          makeName: data.make.makeCode,
          bodyType: data.bodyType.split(","),
          yearFounded: data.yearFounded.toString(),
          active: data.active
        })
        this.data = data;
      }
    })
  }

  openDialog() {
    this._DialogForm.openDialog();
  }

  editModel(){
    const formValues = this.editModelForm.getRawValue();

    const requestBody: IEditModelRequestBody = {
      modelName: formValues.modelName,
      active: formValues.active,
      bodyType: formValues.bodyType,
      yearFounded: +formValues.yearFounded
    }

    this._ModelService.editModel(this.modelCode, requestBody)
      .subscribe(data=>{
        if(data){
          alert("Data saved sucessfully!")
          this.getModel();
        }
      });
  }

}
