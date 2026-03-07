import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ControlContainer, FormGroupDirective, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ISelectOptions } from '../../../Interfaces/shared';

@Component({
  selector: 'app-select-component',
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule, FormsModule, ReactiveFormsModule],
  templateUrl: './select-component.html',
  styleUrl: './select-component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
    viewProviders: [
    { provide: ControlContainer, useExisting: FormGroupDirective }
  ]
})
export class SelectComponent {
  @Input() label!:string;
  @Input() controlName:string = ""
  @Input() options: ISelectOptions[] = []
  @Input() multiple:boolean = false;
}
