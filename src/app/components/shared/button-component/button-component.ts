import { Component, EventEmitter, Input, Output, output } from '@angular/core';
import { MatAnchor } from '@angular/material/button';
import { NgStyle, NgClass } from "../../../../../node_modules/@angular/common/types/_common_module-chunk";

@Component({
  selector: 'app-button-component',
  imports: [MatAnchor],
  templateUrl: './button-component.html',
  styleUrl: './button-component.scss',
})
export class ButtonComponent {
  @Input() label:string = ""
  @Input() type:string = "button";
  @Output() onClick = new EventEmitter();
  @Input() btnBlock:boolean = false;

  public classList:string[] = []

  handleEvent(data?:any){
    this.onClick.emit("data");
  }
}
