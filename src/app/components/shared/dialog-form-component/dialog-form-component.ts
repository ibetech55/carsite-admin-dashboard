import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DialogFormContent } from './content/dialog-form-content';
import { FormGroup } from '@angular/forms';
import { DialogConfirmationContent } from '../dialog-confirmation/content/dialog-confirmation-content';

@Component({
  selector: 'app-dialog-form-component',
  imports: [MatDialogModule],
  templateUrl: './dialog-form-component.html',
  styleUrl: './dialog-form-component.scss',
})
export class DialogFormComponent<T> {
  private readonly dialog = inject(MatDialog);
  private readonly dialogConfirm = inject(MatDialog);

  @Input() data!: T;
  @Input() type!: string;
  @Input() title!: string;
  @Output() editMakeEmitter = new EventEmitter<void>();
  @Input() form!: FormGroup;
  @Input() confirmTitle!: string;
  @Input() confirmMessage!: string;


  openDialog() {
    this.dialog.open(DialogFormContent, {
      data: {
        type: this.type,
        title: this.title,
        data: this.data,
        form: this.form,
        onClick: () => {
          this.openSaveDialog()
        }
      },
      width: '600px',
      height: 'auto'
    });
  }

  openSaveDialog() {
    this.dialogConfirm.open(DialogConfirmationContent, {
      width: '300px',
      height: 'auto',
      data: {
        title: this.confirmTitle,
        message: this.confirmMessage,
        data: this.data,
        onClick: () => {
          this.editMakeEmitter.emit();
          this.dialog.closeAll();
        }
      }
    });
  }
}


