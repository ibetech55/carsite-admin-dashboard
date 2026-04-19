import { Component, Input } from '@angular/core';
import { IMakeCodeResponse } from '../../../../Interfaces/Make';
import { Detail } from "../../../shared/detail/detail";
import { ButtonComponent } from "../../../shared/button-component/button-component";

@Component({
  selector: 'app-make-details',
  imports: [Detail, ButtonComponent],
  templateUrl: './make-details.html',
  styleUrl: './make-details.scss',
})
export class MakeDetails {
  @Input() makeData!:IMakeCodeResponse
}
