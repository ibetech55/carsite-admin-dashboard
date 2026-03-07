import { Component, EventEmitter, Input, Output, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatAnchor } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormField } from "@angular/material/select";
import { ButtonComponent } from "../button-component/button-component";

@Component({
  selector: 'app-search-input-component',
  imports: [MatFormField, FormsModule, MatInputModule, ButtonComponent, ButtonComponent],
  templateUrl: './search-input-component.html',
  styleUrl: './search-input-component.scss',
})
export class SearchInputComponent {
  @Input() value:string = ""
  @Input() name!:string;
  @Input() id!:string;
  @Input() label!:string;
  @Input() hasButton!:boolean;
  @Input() buttonLabel!:string;
  @Output() onClick = new EventEmitter<any>();
  @Output() onChange = new EventEmitter<any>();

  handleClick(){
    this.onClick.emit()
  }

  handleChange(){
    this.onChange.emit(this.value)
  }
}
