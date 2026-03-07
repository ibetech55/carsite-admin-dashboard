import { AfterViewInit, Component, EventEmitter, Injector, Input, OnChanges, OnInit, Output, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { IColumnsData } from '../../../Interfaces/shared';
import { CommonModule } from '@angular/common';
import { MakeTableActionComponent } from '../../make/view-makes/make-table-action-component/make-table-action-component';
import { MatAnchor, MatButtonModule } from "@angular/material/button";


@Component({
  selector: 'app-table-component',
  imports: [MatTableModule, MatPaginatorModule, CommonModule, MatAnchor, MatButtonModule],
  templateUrl: './table-component.html',
  styleUrl: './table-component.scss',
})
export class TableComponent implements OnChanges, OnInit {

  @Input() data:any[] = [];
  @Input() columnsData:IColumnsData[] = []
  @Output() handlePageChange = new EventEmitter<any>();
  @Input() totalCount!: number;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  displayedColumns: string[] = [];
  dataSource = new MatTableDataSource<any[]>();
  pageIndex:number = 1;
  pageSize:number = 10;
  pageSizeOptions = [10, 20, 50, 100, 200]

  onPageChange(event: PageEvent) {
    if(this.handlePageChange){
      event.pageIndex = event.pageIndex + 1
      this.pageIndex = event.pageIndex;
      this.pageSize = event.pageSize;
      this.handlePageChange.emit(event);
    }

  }

  ngOnInit(): void {
    this.displayedColumns = this.columnsData.map(val=>val.key)
  }
  
  ngOnChanges() {
    this.dataSource.data = this.data;
  }
}
