import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICountry } from '../../Interfaces/Location';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})

export class LocationService {

  private URL = environment.LOCATION_API_URL;
  constructor(private _Http:HttpClient) {
  }
  getCountries():Observable<ICountry[]>{
    return this._Http.get<ICountry[]>(`${this.URL}/countries`)
  }
}
