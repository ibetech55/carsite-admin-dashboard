import { Component, Input } from '@angular/core';
import { ControlContainer, FormGroupDirective, ReactiveFormsModule } from '@angular/forms';
import { MatCheckbox } from "@angular/material/checkbox";

@Component({
  selector: 'app-checkbox-component',
  imports: [MatCheckbox, ReactiveFormsModule],
  templateUrl: './checkbox-component.html',
  styleUrl: './checkbox-component.scss',
  viewProviders: [
    { provide: ControlContainer, useExisting: FormGroupDirective }
  ]
})
export class CheckboxComponent {
  @Input() label!: string;
  @Input() controlName!: string;
}
