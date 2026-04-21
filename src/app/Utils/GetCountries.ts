import { Injectable, OnInit } from "@angular/core";
import { ICountry } from "../Interfaces/Location";
import { ISelectOptions } from "../Interfaces/shared";
import { LocationService } from "../services/location/location.service";
import { map, Observable } from "rxjs";

@Injectable({
    providedIn: 'root',
})

export class GetCountries {
    countries: ICountry[] = [];

    /**
     *
     */
    constructor(private readonly _LocationService: LocationService) {
    }

    public execute(): Observable<ISelectOptions[]> {
        return this._LocationService.getCountries().pipe(
            map(data => data?.map(country => ({
                value: country.name,
                label: country.name
            })) || [])
        );
    }
}