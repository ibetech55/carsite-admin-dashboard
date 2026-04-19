import { Component, Input } from '@angular/core';
import { Detail } from "../../shared/detail/detail";
import { IModel } from '../../../Interfaces/Model';
import { ButtonComponent } from "../../shared/button-component/button-component";

@Component({
  selector: 'app-model-details',
  imports: [Detail, ButtonComponent],
  templateUrl: './model-details.html',
  styleUrl: './model-details.scss',
})
export class ModelDetails {
  @Input() modelData!:IModel;
}
