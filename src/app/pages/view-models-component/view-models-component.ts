import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ModelTableComponent } from '../../components/models/view-models/model-table/model-table-component';
import { ModelService } from '../../services/model/model.service';
import { IModels, IQueryModels } from '../../Interfaces/Model';
import { Observable } from 'rxjs';
import { IPagination, IQueryParams } from '../../Interfaces/shared';
import { AsyncPipe } from '@angular/common';
import { ModelFilterComponent } from "../../components/models/view-models/model-filter-component/model-filter-component";

@Component({
  selector: 'app-view-models-component',
  imports: [ModelTableComponent, AsyncPipe, ModelFilterComponent],
  templateUrl: './view-models-component.html',
  styleUrl: './view-models-component.scss',
})
export class ViewModelsComponent implements OnInit {
  public DEFAULT_DATA: IPagination<IModels> = { data: [], page: 0, limit: 0, totalCount: 0 };
  data$!: Observable<IPagination<IModels>>;
  modelCode: string = "";
  modelName: string = "";

  constructor(private _ModelService: ModelService) {
  }

  ngOnInit(): void {
    this.getModels();
  }

  getModels(queryParams?: IQueryParams<IQueryModels>) {
    this.data$ = this._ModelService.getModels(queryParams);
  }

  onChangeModelCode(value: string) {
    this.modelCode = value;
  }

  onChangeModelName(value: string) {
    this.modelName = value;
  }

  onClickModelCode() {
    this.getModels({ data: { modelCode: this.modelCode } })
  }

  onClickModelName() {
    this.getModels({ data: { modelName: this.modelName } })
  }
}
