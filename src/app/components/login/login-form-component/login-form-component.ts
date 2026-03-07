import { Component } from '@angular/core';
import { InputComponent } from "../../shared/input-component/input-component";
import { ButtonComponent } from "../../shared/button-component/button-component";

@Component({
  selector: 'app-login-form-component',
  imports: [InputComponent, ButtonComponent],
  templateUrl: './login-form-component.html',
  styleUrl: './login-form-component.scss',
})
export class LoginFormComponent {
  handleLogin() {
    alert("Test Login")
  }
}
