import { Component } from '@angular/core';
import { ButtonComponent } from '../../components/button/button.component';

@Component({
  selector: 'app-register',
  imports: [ButtonComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  passwordOcult = true 
  passwordOcult1 = true
  showPassword() {
   this.passwordOcult = !this.passwordOcult
  }
  showPassword1() {
    this.passwordOcult1 = !this.passwordOcult1
  }
}
