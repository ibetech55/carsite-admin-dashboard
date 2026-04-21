import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { MakeService } from '../../services/make/make.service';
import { AsyncPipe, CommonModule, JsonPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { IEditMakeRequestBody, IMakeCodeResponse } from '../../Interfaces/Make';
import { MakeDetails } from "../../components/make/view-make/make-details/make-details";
import { MakeLogo } from "../../components/make/view-make/make-logo/make-logo";
import { ModelTableComponent } from "../../components/models/view-models/model-table/model-table-component";
import { IModels, IQueryModels } from '../../Interfaces/Model';
import { IFileData, IPagination, IQueryParams } from '../../Interfaces/shared';
import { ModelService } from '../../services/model/model.service';
import { DialogFormComponent } from "../../components/shared/dialog-form-component/dialog-form-component";
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-make-details-component',
  imports: [AsyncPipe, CommonModule, MakeDetails, MakeLogo, ModelTableComponent, DialogFormComponent],
  templateUrl: './make-details-component.html',
  styleUrl: './make-details-component.scss',
})
export class MakeDetailsComponent implements OnInit {

  @ViewChild(DialogFormComponent) _DialogForm!: DialogFormComponent<IMakeCodeResponse>;
  public makeCode = "";
  public makeName = "";
  public makeData$!: Observable<IMakeCodeResponse>;
  public data!: IMakeCodeResponse;
  public DEFAULT_DATA: IPagination<IModels> = { data: [], page: 0, limit: 0, totalCount: 0 };
  public modelData$!: Observable<IPagination<IModels>>
  public CONFIRM_MESSAGE:string = "";

  editMakeForm = new FormGroup({
    makeName: new FormControl("", { nonNullable: true }),
    origin: new FormControl("", { nonNullable: true }),
    company: new FormControl("", { nonNullable: true }),
    yearFounded: new FormControl("", { nonNullable: true }),
    active: new FormControl(false, { nonNullable: true })
  })
  /**
   *
   */
  constructor(private readonly _MakeService: MakeService, private readonly _ModelService: ModelService, private readonly _Router: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.makeCode = this._Router.snapshot.paramMap.get("makeCode") ?? ""
    this.getMakeByMakeCode();
  }

  getModels(queryParams?: IQueryParams<IQueryModels>) {
    this.modelData$ = this._ModelService.getModels({ ...queryParams })
  }

  getMakeByMakeCode() {
    this.makeData$ = this._MakeService.getMakeByMakeCode(this.makeCode);
    this.modelData$ = this._ModelService.getModels({ limit: 50, data: { makeCode: this.makeCode } })

    this.makeData$.subscribe({
      next: (value) => {
        this.setConfirmMessage(value.makeName)
        this.editMakeForm.setValue({
          makeName: value?.makeName,
          company: value?.company,
          origin: value?.origin,
          yearFounded: value?.yearFounded?.toString(),
          active: value?.active
        })
      },
    })
  }

  setConfirmMessage(message:string){
    this.CONFIRM_MESSAGE = `Are you sure you want to make changes to make <strong>${message}?</strong>`;
  }

  openModal() {
    this._DialogForm.openDialog();
  }

  editMake() {
    const formValues = this.editMakeForm.getRawValue();

    const requestBody: IEditMakeRequestBody = {
      makeName: formValues.makeName,
      origin: formValues.origin,
      active: formValues.active,
      yearFounded: +formValues.yearFounded,
      company: formValues.company
    }

    this._MakeService.editMake(this.makeCode, requestBody).subscribe(data => {
      if (data) {
        this.getMakeByMakeCode();
      }
    })
  }





}
