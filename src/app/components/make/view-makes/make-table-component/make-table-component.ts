import { AfterViewInit, Component, EventEmitter, Injector, Input, OnChanges, OnInit, Output, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { IMakes, IMakeTableData, IQueryMakes } from '../../../../Interfaces/Make';
import { TableComponent } from '../../../shared/table-component/table-component';
import { IColumnsData, IPagination, IQueryParams } from '../../../../Interfaces/shared';
import { MakeTableActionComponent } from '../make-table-action-component/make-table-action-component';
import { IQueryModels } from '../../../../Interfaces/Model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-make-table-component',
  imports: [MatTableModule, MatPaginatorModule, TableComponent],
  templateUrl: './make-table-component.html',
  styleUrl: './make-table-component.scss',
  standalone: true
})
export class MakeTableComponent implements OnChanges {
  @Input() data: IPagination<IMakes> = {
    limit: 0,
    page: 0,
    totalCount: 0,
    data: []
  };

  @Output() getMakesEmitter = new EventEmitter<IQueryParams<IQueryMakes>>()
  @Input() totalCount: number = 0;

  /**
   *
   */
  constructor(private _Router:Router) {  
  }
  makeData: IMakeTableData[] = [];
  columnsData: IColumnsData[] = [
    {
      key: "makeName",
      columnName: "Make Name"
    },
    {
      key: "status",
      columnName: "Status",
    },
    {
      key: "yearFounded",
      columnName: "Year Founded"
    },
    {
      key: "origin",
      columnName: "Origin"
    },
    {
      key: "makeCode",
      columnName: "Make Code"
    },
    {
      key: "company",
      columnName: "Company"
    },
    {
      key: "component",
      columnName: "",
      component: {
        type: "button",
        label: "View",
        action: (data: IMakeTableData) => {
          this._Router.navigate([`/view-make/${data.makeCode}`])
        }
      }
    }
  ];

  handlePageChange = (event: PageEvent) => {
    var queryParams: IQueryParams<IMakes> = {
      page: event.pageIndex,
      limit: event.pageSize
    };
    this.getMakesEmitter.emit(queryParams)
  }

  /**
   *
   */


  ngOnChanges(): void {
    this.totalCount = this.data.totalCount;
    this.makeData = this.data.data.map(val => ({
      makeName: val.makeName,
      origin: val.origin,
      status: val.active ? "Active" : "Inactive",
      yearFounded: val.yearFounded.toString(),
      makeCode: val.makeCode,
      company: val.company
    }));
  }


}



