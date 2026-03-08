import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IMakes } from '../../Interfaces/Make';
import { IPagination, IQueryParams } from '../../Interfaces/shared';
import { ICreateModel, IModels, IQueryModels } from '../../Interfaces/Model';

@Injectable({
  providedIn: 'root',
})
export class ModelService {
  private _HttpClient: HttpClient;
  private URL = "https://api.ibetech.online/api/brand-microservice/make"
  /**
   *
   */
  constructor(private readonly HttpClient: HttpClient) {
    this._HttpClient = HttpClient
  }

  getModels(queryParams?: IQueryParams<IQueryModels>): Observable<IPagination<IModels>> {
    let params = new HttpParams();
    if (queryParams?.page) {
      params = params.set('page', queryParams.page);
    }

    if (queryParams?.limit) {
      params = params.set('limit', queryParams.limit);
    }

    if (queryParams?.data?.modelName) {
      params = params.set('modelName', queryParams.data.modelName)
    }

    if (queryParams?.data?.modelCode) {
      params = params.set('modelCode', queryParams.data.modelCode)
    }

    return this._HttpClient.get<IPagination<IModels>>(this.URL, { params });
  }

  createModel(requestyBody: ICreateModel): Observable<boolean> {
    return this.HttpClient.post<boolean>(this.URL, requestyBody)
  }
}
