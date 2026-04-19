import { Component, Type } from "@angular/core";
import { IFileData } from "./shared";

export interface IMakes {
  makeName: string;
  origin: number;
  active:boolean;
  yearFounded:number;
  makeCode:string;
  company:string;
}

export interface IMakeTableData {
  makeName: string;
  origin: number;
  status:string;
  yearFounded:string;
  makeCode:string;
  company:string;
  component?:any;
}

export interface IQueryMakes {
  makeName?: string;
  origin?: number;
  active?:boolean;
  yearFounded?:number;
  makeCode?:string;
  company?:string;
}

export interface ICreateMakeRequestBody {
  makeName: string;
  origin: string;
  company:string;
  makeAbbreviation:string;
  yearFounded:number,
  makeLogo:IFileData;
}

export interface IMakeNameList {
  makeName:string;
  makeCode:string;
}

export interface IMakeCodeResponse {
  active:boolean;
  company:string;
  dataCreated:string;
  dataUpdated:string;
  id:string;
  makeAbbreviation:string;
  makeCode:string;
  makeLogo:string;
  origin:string;
  yearFounded:number;
  makeName: string;
}