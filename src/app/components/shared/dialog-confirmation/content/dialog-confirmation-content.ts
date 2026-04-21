import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { ButtonComponent } from '../../button-component/button-component';

@Component({
  selector: 'app-dialog-confirmation-content',
  imports: [MatDialogModule, ButtonComponent, CommonModule],
  templateUrl: './dialog-confirmation-content.html',
  styleUrl: './dialog-confirmation-content.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogConfirmationContent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

  handleSave(){
    console.log(this.data)
  }
}
