import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatLabel } from "@angular/material/select";
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-file-input-component',
  imports: [MatLabel, FormsModule],
  templateUrl: './file-input-component.html',
  styleUrl: './file-input-component.scss',
})
export class FileInputComponent {
  @Output() onChange = new EventEmitter<File>();
  @Input() label!:string;

  handleOnChange(event:Event){
    const input  = event.target as HTMLInputElement;
    if(input?.files && input.files?.length > 0){
      this.onChange.emit(input.files[0])
    }
  }
}
