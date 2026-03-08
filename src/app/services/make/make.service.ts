import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ICreateMakeRequestBody, IMakeNameList, IMakes, IQueryMakes } from '../../Interfaces/Make';
import { IPagination, IQueryParams } from '../../Interfaces/shared';

@Injectable({
  providedIn: 'root',
})
export class MakeService {
  public url = "https://api.ibetech.online/api/brand-microservice/make";

  constructor(private http: HttpClient) { }

  getMakes(queryParams?: IQueryParams<IQueryMakes>): Observable<IPagination<IMakes>> {
    let params = new HttpParams();

    if (queryParams?.page) {
      params = params.set('page', queryParams.page);
    }

    if (queryParams?.limit) {
      params = params.set('limit', queryParams.limit);
    }

    if(queryParams?.data?.makeName){
      params = params.set("makeName", queryParams?.data?.makeName);
    }

    if(queryParams?.data?.makeCode){
      params = params.set("makeCode", queryParams?.data?.makeCode);
    }

    return this.http.get<IPagination<IMakes>>(`${this.url}`, { params: params })
  }

  postMake(makeRequestBody:ICreateMakeRequestBody):Observable<boolean>{
    return this.http.post<boolean>(`${this.url}`, makeRequestBody)
  }

  getMakeNameList():Observable<IMakeNameList[]>{
    return this.http.get<IMakeNameList[]>(`${this.url}/makeNameList`)
  }
}
