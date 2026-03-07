import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatAccordion, MatExpansionPanel, MatExpansionPanelHeader } from "@angular/material/expansion";
import { InputComponent } from "../../../shared/input-component/input-component";
import { SearchInputComponent } from "../../../shared/search-input-component/search-input-component";
import { ButtonComponent } from "../../../shared/button-component/button-component";

@Component({
  selector: 'app-model-filter-component',
  imports: [MatAccordion, MatExpansionPanel, MatExpansionPanelHeader, InputComponent, SearchInputComponent, ButtonComponent],
  templateUrl: './model-filter-component.html',
  styleUrl: './model-filter-component.scss',
})
export class ModelFilterComponent {
  @Input() modelName: string = "";
  @Input() modelCode: string = "";
  @Output() onChangeModelCodeEmitter = new EventEmitter<string>();
  @Output() onChangeModelNameEmitter = new EventEmitter<string>();
  @Output() onClickModelCodeEmitter = new EventEmitter();
  @Output() onClickModelNameEmitter = new EventEmitter();

  onChangeModelCode(value: string) {
    this.onChangeModelCodeEmitter.emit(value)
  }

  onChangeModelName(value: string) {
    this.onChangeModelNameEmitter.emit(value)
  }

  onClickModelName() {
    this.onClickModelNameEmitter.emit()
  }

  onClickModelCode() {
    this.onClickModelCodeEmitter.emit()
  }
}
