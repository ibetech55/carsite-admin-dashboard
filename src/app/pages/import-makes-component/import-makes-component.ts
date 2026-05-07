import { Component } from '@angular/core';
import { ImportMakes } from "../../components/make/import-makes/import-makes";
import { MakeService } from '../../services/make/make.service';
import { HandleDownload } from '../../Utils/HandleDownload';

@Component({
  selector: 'app-import-makes-component',
  imports: [ImportMakes],
  templateUrl: './import-makes-component.html',
  styleUrl: './import-makes-component.scss',
})
export class ImportMakesComponent {
  /**
   *
   */

  private fileData!:File;
  
  constructor(private readonly _MakeService: MakeService) {
  }

  downloadMakesTemplate() {
    this._MakeService.downloadMakesTemplateFile()
      .subscribe(blob => {
        if (blob) {
          HandleDownload.execute(blob, "makes_template.xlsx")
        }
      })
  }

  submitFile() {
    console.log(this.fileData)
  }

  onFileChange(file: File) {
    this.fileData = file;
  }
}
