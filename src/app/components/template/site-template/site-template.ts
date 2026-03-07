import { Component, HostListener, signal } from '@angular/core';
import { LeftSidebar } from '../left-sidebar/left-sidebar';
import { TemplateBody } from '../template-body/template-body';

@Component({
  selector: 'app-site-template',
  imports: [LeftSidebar, TemplateBody],
  templateUrl: './site-template.html',
  styleUrl: './site-template.scss',
})
export class SiteTemplate {
  isLeftSidebarCollapsed = signal<boolean>(false);
  screenWidth = signal<number>(window.innerWidth);

  ngOnInit(): void {
    this.isLeftSidebarCollapsed.set(this.screenWidth() < 768);
  }

  changeIsLeftSidebarCollapsed(isLeftSidebarCollapsed:boolean): void {
    this.isLeftSidebarCollapsed.set(isLeftSidebarCollapsed)
  }

  @HostListener("window:resize")
  onResize(){
    this.screenWidth.set(window.innerWidth)
    if(this.screenWidth() < 768){
      this.isLeftSidebarCollapsed.set(true)
    }
  }
}
