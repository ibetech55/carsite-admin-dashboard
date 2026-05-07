import { Component, EventEmitter, Output, output } from '@angular/core';
import { FileInputComponent } from "../../shared/file-input-component/file-input-component";
import { ButtonComponent } from "../../shared/button-component/button-component";

@Component({
  selector: 'app-import-models',
  imports: [FileInputComponent, ButtonComponent],
  templateUrl: './import-models.html',
  styleUrl: './import-models.scss',
})
export class ImportModels {
  @Output() downloadModelTemplateEmitter = new EventEmitter<void>();
  @Output() submitFileEmitter = new EventEmitter<Event>();
  @Output() onFileChangeEmitter = new EventEmitter<File>();
}
