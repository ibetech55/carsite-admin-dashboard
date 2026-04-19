import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { MakeService } from '../../services/make/make.service';
import { AsyncPipe, CommonModule, JsonPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { IMakeCodeResponse } from '../../Interfaces/Make';
import { MakeDetails } from "../../components/make/view-make/make-details/make-details";
import { MakeLogo } from "../../components/make/view-make/make-logo/make-logo";
import { ModelTableComponent } from "../../components/models/view-models/model-table/model-table-component";
import { IModels, IQueryModels } from '../../Interfaces/Model';
import { IPagination, IQueryParams } from '../../Interfaces/shared';
import { ModelService } from '../../services/model/model.service';

@Component({
  selector: 'app-make-details-component',
  imports: [AsyncPipe, CommonModule, MakeDetails, MakeLogo, ModelTableComponent],
  templateUrl: './make-details-component.html',
  styleUrl: './make-details-component.scss',
})
export class MakeDetailsComponent implements OnInit {

  public makeCode = "";
  public makeName = "";
  public makeData$!: Observable<IMakeCodeResponse>;
  public DEFAULT_DATA: IPagination<IModels> = { data: [], page: 0, limit: 0, totalCount: 0 };
  public modelData$!: Observable<IPagination<IModels>>
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
    this.modelData$ = this._ModelService.getModels({...queryParams, data:{makeName:this.makeName}})
  }

  getMakeByMakeCode() {
    this.makeData$ = this._MakeService.getMakeByMakeCode(this.makeCode);
    this.modelData$ = this._ModelService.getModels({limit:50, data: { makeCode: this.makeCode } })
  }



}
