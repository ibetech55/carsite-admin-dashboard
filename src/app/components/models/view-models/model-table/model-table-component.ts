import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { IModels, IModelTableData, IQueryModels } from '../../../../Interfaces/Model';
import { IColumnsData, IPagination, IQueryParams } from '../../../../Interfaces/shared';
import { TableComponent } from '../../../shared/table-component/table-component';
import { PageEvent } from '@angular/material/paginator';
import { ButtonComponent } from "../../../shared/button-component/button-component";

@Component({
  selector: 'app-model-table-component',
  imports: [TableComponent],
  templateUrl: './model-table-component.html',
  styleUrl: './model-table-component.scss',
})
export class ModelTableComponent implements OnChanges {
  @Output() getModelsEmitter = new EventEmitter<IQueryParams<IQueryModels>>();
  @Input() data: IPagination<IModels> = {
    limit: 0,
    page: 0,
    totalCount: 0,
    data: []
  };

  modelData: IModelTableData[] = [];
  totalCount = 0;
  columnsData: IColumnsData[] = [
    {
      key: 'modelName',
      columnName: 'Model Name'
    },
    {
      key: 'makeName',
      columnName: 'Make Name'
    },
    {
      key: 'yearFounded',
      columnName: 'Year Founded'
    },
    {
      key: 'bodyType',
      columnName: 'Body Type'
    },
    {
      key: 'active',
      columnName: 'Status'
    },
    {
      key: 'modelCode',
      columnName: 'Model Code'
    }
  ];

  handleGetModels(value?:IQueryParams<IQueryModels>){
    this.getModelsEmitter.emit(value)
  }

  handlePageChange(event: PageEvent) {
    var queryParams: IQueryParams<IQueryModels> = {
      page: event.pageIndex,
      limit: event.pageSize
    };
    this.getModelsEmitter.emit(queryParams)
  }

  ngOnChanges() {
    this.totalCount = this.data.totalCount;
    this.modelData = this.data.data.map(val => ({
      modelName: val.modelName,
      makeName: val.make.makeName,
      yearFounded: val.yearFounded?.toString(),
      bodyType: val.bodyType,
      active: val.active ? "Active" : "Inactive",
      modelCode: val.modelCode
    }));
  }
}
