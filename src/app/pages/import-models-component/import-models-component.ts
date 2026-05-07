import { Component } from '@angular/core';
import { ImportModels } from "../../components/models/import-models/import-models";
import { ModelService } from '../../services/model/model.service';
import { HandleDownload } from '../../Utils/HandleDownload';

@Component({
  selector: 'app-import-models-component',
  imports: [ImportModels],
  templateUrl: './import-models-component.html',
  styleUrl: './import-models-component.scss',
})
export class ImportModelsComponent {
  /**
   *
   */

  private fileData!:File;
  constructor(private readonly _ModelService:ModelService) {    
  }

  downloadModelTemplate(){
    this._ModelService.downloadModelsTemplateFile()
        .subscribe(blob=>{
          if(blob){
            HandleDownload.execute(blob, "model_template.xlsx");
          }
        })
  }

  submitFile(){
    console.log(this.fileData)
  }

  onFileChange(file:File){
        this.fileData = file;
  }
}
