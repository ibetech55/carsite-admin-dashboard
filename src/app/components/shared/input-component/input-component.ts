import { Component, Input } from '@angular/core';
import { ControlContainer, FormGroup, FormGroupDirective, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormField } from '@angular/material/select';
import { MakeFilterComponent } from '../../make/view-makes/make-filter-component/make-filter-component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-input-component',
  imports: [MatFormField, MatInputModule, FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './input-component.html',
  styleUrl: './input-component.scss',
  viewProviders: [
    { provide: ControlContainer, useExisting: FormGroupDirective }
  ]
})
export class InputComponent {
  @Input() id!:string;
  @Input() label!:string;
  @Input() controlName:string = "";
  @Input() type:string = "text";
}
