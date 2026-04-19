import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IMakes } from '../../Interfaces/Make';
import { IPagination, IQueryParams } from '../../Interfaces/shared';
import { ICreateModel, IModel, IModels, IQueryModels } from '../../Interfaces/Model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ModelService {
  private _HttpClient: HttpClient;
  private URL = environment.MODEL_API_URL;
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

    if (queryParams?.data?.makeName) {
      params = params.set('makeName', queryParams.data.makeName)
    }

    if (queryParams?.data?.makeCode) {
      params = params.set('makeCode', queryParams.data.makeCode)
    }

    return this._HttpClient.get<IPagination<IModels>>(this.URL, { params });
  }

  createModel(requestyBody: ICreateModel): Observable<boolean> {
    return this.HttpClient.post<boolean>(this.URL, requestyBody)
  }

  getModelByModelCode(modelCode:string): Observable<IModel> { 
    return this.HttpClient.get<IModel>(`${this.URL}/${modelCode}`)
  }

}
