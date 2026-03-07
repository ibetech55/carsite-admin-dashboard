import { CommonModule } from '@angular/common';
import { Component, computed, input, output } from '@angular/core';
import { RouterModule } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';

@Component({
  selector: 'app-template-body',
  imports: [CommonModule, RouterModule, MatToolbarModule, MatButtonModule, MatIconModule],
  templateUrl: './template-body.html',
  styleUrl: './template-body.scss',
})
export class TemplateBody {
  changeIsLeftSidebarCollapsed = output<boolean>(); 
 isLeftSidebarCollapsed = input.required<boolean>();
 screenWidth = input.required<number>();
sizeClass = computed(() => {
  const isLeftSidebarCollapsed = this.isLeftSidebarCollapsed();
  if (isLeftSidebarCollapsed) {
    return '';
  }
  return this.screenWidth() > 768 ? 'body-trimmed' : 'body-md-screen';
  });

  toggleCollapse():void{
    this.changeIsLeftSidebarCollapsed.emit(!this.isLeftSidebarCollapsed())
  }
}
