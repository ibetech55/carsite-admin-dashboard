import { IMakes } from "./Make";

export interface IModels {
    modelName: string;
    active: boolean;
    bodyType:string;
    yearFounded:number;
    modelCode:string;
    make:IMakes
}

export interface IModelTableData {
    modelName: string;
    active: string;
    bodyType:string;
    yearFounded:string;
    modelCode:string;
    makeName:string;
}

export interface IQueryModels {
    modelName?: string;
    active?: string;
    bodyType?:string;
    yearFounded?:number;
    modelCode?:string;
    makeName?:string;
}

export interface ICreateModel {
    modelName:string;
    bodyType:string[];
    yearFounded:number;
    makeCode:string;
}