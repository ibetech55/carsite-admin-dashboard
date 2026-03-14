export interface IColumnsData {
  component?: any;
  key:string;
  columnName:string;
  func?:Function
}

export interface IPagination<T> {
  limit:number;
  page:number;
  totalCount:number;
  data:T[]
}

export interface IQueryParams<T> {
  limit?:number;
  page?:number;
  data?:T
}

export interface ISelectOptions {
  label:string;
  value:string;
}

export interface IFileData {
  name:string,
  size: number,
  type:string
}