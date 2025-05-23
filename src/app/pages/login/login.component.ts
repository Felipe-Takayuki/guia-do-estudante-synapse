import { Component } from '@angular/core';
import { ButtonComponent } from '../../components/button/button.component';

@Component({
  selector: 'app-login',
  imports: [ButtonComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
 passwordOcult = true 
 showPassword() {
  this.passwordOcult = !this.passwordOcult
 }
}
