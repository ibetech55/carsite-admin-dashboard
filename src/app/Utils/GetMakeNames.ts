import { map, Observable } from "rxjs";
import { MakeService } from "../services/make/make.service";
import { IMakeNameList } from "../Interfaces/Make";
import { ISelectOptions } from "../Interfaces/shared";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root',
})

export class MakeNamesList {
    /**
     *
     */
    constructor(private _MakeService: MakeService) {

    }

    execute(): Observable<ISelectOptions[]> {
        return this._MakeService.getMakeNameList()
            .pipe(map(data => data?.map(make => ({
                value: make.makeCode,
                label: make.makeName
            }))) || [])
    }
}