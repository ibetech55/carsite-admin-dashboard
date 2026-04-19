import { Component, OnInit } from '@angular/core';
import { ModelService } from '../../services/model/model.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IModel, IModels } from '../../Interfaces/Model';
import { CommonModule } from '@angular/common';
import { ModelDetails } from '../../components/models/model-details/model-details';

@Component({
  selector: 'app-model-details-component',
  imports: [CommonModule, ModelDetails],
  templateUrl: './model-details-component.html',
  styleUrl: './model-details-component.scss',
})
export class ModelDetailsComponent implements OnInit {
  private modelCode:string = "";
  public modelData$!:Observable<IModel>;

  constructor(private readonly _ModelService:ModelService, private readonly _Router:ActivatedRoute) {
  }
  ngOnInit(): void {
    this.modelCode = this._Router.snapshot.paramMap.get("modelCode") ?? ""
    this.getModel();
  }

  getModel(){
    this.modelData$ = this._ModelService.getModelByModelCode(this.modelCode)
  }
    
}
