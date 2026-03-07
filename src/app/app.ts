import { Component, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { RouterOutlet } from '@angular/router';
import { SiteTemplate } from './components/template/site-template/site-template';
import { TemplateBody } from './components/template/template-body/template-body';

@Component({
  selector: 'app-root',
  imports: [MatButtonModule, MatDividerModule, MatIconModule, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  authenticated = true
}
