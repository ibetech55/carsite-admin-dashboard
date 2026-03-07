import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICountry } from '../../Interfaces/Location';

@Injectable({
  providedIn: 'root',
})

export class LocationService {

  private URL = "http://localhost:5010/location-api"
  constructor(private _Http:HttpClient) {
    
    
  }
  getCountries():Observable<ICountry[]>{
    return this._Http.get<ICountry[]>(`${this.URL}/countries`)
  }
}
