import { Component, EventEmitter, Output } from '@angular/core';
import { FileInputComponent } from "../../shared/file-input-component/file-input-component";
import { MakeService } from '../../../services/make/make.service';
import { ButtonComponent } from "../../shared/button-component/button-component";

@Component({
  selector: 'app-import-makes',
  imports: [FileInputComponent, ButtonComponent],
  templateUrl: './import-makes.html',
  styleUrl: './import-makes.scss',
})
export class ImportMakes {
  @Output() downloadMakeTemplateEmitter = new EventEmitter<void>();
  @Output() onFileChangeEmitter = new EventEmitter<File>();
  @Output() submitFileEmitter = new EventEmitter<void>();

  downloadMakeTemplate(){
    this.downloadMakeTemplateEmitter.emit();
  }
}
