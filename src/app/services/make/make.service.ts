import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ICreateMakeRequestBody, IEditMakeRequestBody, IMakeCodeResponse, IMakeNameList, IMakes, IQueryMakes } from '../../Interfaces/Make';
import { IPagination, IQueryParams } from '../../Interfaces/shared';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MakeService {
  public url = environment.MAKE_API_URL;

  constructor(private http: HttpClient) { }

  getMakes(queryParams?: IQueryParams<IQueryMakes>): Observable<IPagination<IMakes>> {
    let params = new HttpParams();

    if (queryParams?.page) {
      params = params.set('page', queryParams.page);
    }

    if (queryParams?.limit) {
      params = params.set('limit', queryParams.limit);
    }

    if (queryParams?.data?.makeName) {
      params = params.set("makeName", queryParams?.data?.makeName);
    }

    if (queryParams?.data?.makeCode) {
      params = params.set("makeCode", queryParams?.data?.makeCode);
    }

    return this.http.get<IPagination<IMakes>>(`${this.url}`, { params: params })
  }

  postMake(makeRequestBody: ICreateMakeRequestBody): Observable<boolean> {
    return this.http.post<boolean>(`${this.url}`, makeRequestBody)
  }

  getMakeNameList(): Observable<IMakeNameList[]> {
    return this.http.get<IMakeNameList[]>(`${this.url}/makeNameList`)
  }

  getMakeByMakeCode(makeCode: string): Observable<IMakeCodeResponse> {
    return this.http.get<IMakeCodeResponse>(`${this.url}/${makeCode}`);
  }

  editMake(makeCode: string, body: IEditMakeRequestBody) {
    return this.http.put<boolean>(`${this.url}/${makeCode}`, body);
  }
}
