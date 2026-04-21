import { CommonModule } from "@angular/common";
import { Component, ChangeDetectionStrategy, Inject } from "@angular/core";
import { MatDialogModule, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { ButtonComponent } from "../../button-component/button-component";
import { EditMakeForm } from "../../../make/view-make/edit-make-form/edit-make-form";

@Component({
  selector: 'edit-make-dialog-content',
  templateUrl: 'dialog-form-content.html',
  imports: [MatDialogModule, ButtonComponent, CommonModule, EditMakeForm],
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl:"dialog-form-content.scss"
})

export class DialogFormContent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

  handleSave(){
    console.log(this.data)
  }
}