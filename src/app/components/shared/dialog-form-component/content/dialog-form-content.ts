import { CommonModule } from "@angular/common";
import { Component, ChangeDetectionStrategy, Inject } from "@angular/core";
import { MatDialogModule, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { ButtonComponent } from "../../button-component/button-component";
import { EditMakeForm } from "../../../make/view-make/edit-make-form/edit-make-form";
import { EditModelForm } from "../../../models/view-models/edit-model-form/edit-model-form";

@Component({
  selector: 'edit-make-dialog-content',
  templateUrl: 'dialog-form-content.html',
  imports: [MatDialogModule, ButtonComponent, CommonModule, EditMakeForm, EditModelForm],
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl:"dialog-form-content.scss"
})

export class DialogFormContent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

  handleSave(){
    console.log(this.data)
  }
}