import { Component, input, OnInit, ViewChild } from '@angular/core';
import { IMakes, IQueryMakes } from '../../Interfaces/Make';
import { MakeTableComponent } from '../../components/make/view-makes/make-table-component/make-table-component';
import { MakeService } from '../../services/make/make.service';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { IPagination, IQueryParams } from '../../Interfaces/shared';
import { MakeFilterComponent } from "../../components/make/view-makes/make-filter-component/make-filter-component";


@Component({
  selector: 'app-view-makes-component',
  imports: [MakeTableComponent, AsyncPipe, MatButtonModule, FormsModule, MatFormFieldModule, MatInputModule, MakeFilterComponent],
  templateUrl: './view-makes-component.html',
  styleUrl: './view-makes-component.scss',
  standalone: true
})

export class ViewMakesComponent implements OnInit {
  public DEFAULT_DATA: IPagination<IMakes> = { data: [], page: 0, limit: 0, totalCount: 0 };
  data$!: Observable<IPagination<IMakes>>;

  makeName: string = "";
  makeCode: string = "";

  constructor(private readonly _MakeService: MakeService) {
  }

  ngOnInit(): void {
    this.getMakes();
  }

  getMakes(queryParams?: IQueryParams<IQueryMakes>){
    if (!!this.makeName && queryParams?.data) {
      queryParams.data.makeName = this.makeName;
    }

    if (!!this.makeCode && queryParams?.data) {
      queryParams.data.makeCode = this.makeCode;
    }

    this.data$ = this._MakeService.getMakes(queryParams);
  };


  handleSearchByMakeName() {
    this.getMakes({ data: { makeName: this.makeName } })
  }

  onChangeMakeName(value: string) {
    this.makeName = value
  }

  handleSearchByMakeCode() {
    this.getMakes({ data: { makeCode: this.makeCode } })
  }

  onChangeMakeCode(value: string) {
    this.makeCode = value
  }
}
