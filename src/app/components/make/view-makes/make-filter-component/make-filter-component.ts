import { Component, EventEmitter, Input, Output } from '@angular/core';
import { InputComponent } from "../../../shared/input-component/input-component";
import { MatAnchor } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { ButtonComponent } from "../../../shared/button-component/button-component";
import { ControlContainer, FormControl, FormGroup, FormGroupDirective, FormsModule, ReactiveFormsModule, ɵInternalFormsSharedModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormField } from '@angular/material/select';
import { SearchInputComponent } from "../../../shared/search-input-component/search-input-component";

@Component({
  selector: 'app-make-filter-component',
  imports: [InputComponent, MatAnchor, MatExpansionModule, ReactiveFormsModule, SearchInputComponent, MatInputModule, FormsModule, SearchInputComponent],
  templateUrl: './make-filter-component.html',
  styleUrl: './make-filter-component.scss'
})
export class MakeFilterComponent {

  @Output() handleByMakeNameEmitter = new EventEmitter<any>();
  @Output() handleByMakeCodeEmitter = new EventEmitter<any>();
  @Output() changeMakeNameEmitter = new EventEmitter<any>();
  @Output() changeMakeCodeEmitter = new EventEmitter<any>();

  @Input() makeName:string = "";
  @Input() makeCode:string = "";



    onChangeMakeName(value:any){
      this.changeMakeNameEmitter.emit(value)
    }

    onChangeMakeCode(value:any){
      this.changeMakeCodeEmitter.emit(value)
    }
  
    onClick(value?:any){
      this.handleByMakeNameEmitter.emit(value);
    }

    onClickMakeCode(value?:any){
      this.handleByMakeCodeEmitter.emit(value)
    }
  }
