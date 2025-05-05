import { Component } from '@angular/core';
import { NavbuttonComponent } from './navbutton/navbutton.component';

@Component({
  selector: 'app-navbar',
  imports: [NavbuttonComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  botoes = [
    {
      label: "Home",
      iconSrc: "images/assets/homeicon.svg"
    },
    {
      label: "Notificações",
      iconSrc: "images/assets/bellicon.svg"
    },
    {
      label: "Materiais",
      iconSrc: "images/assets/materiasicon.svg"
    },
    {
      label: "Valores",
      iconSrc: "images/assets/staricon.svg"
    },
    {
      label: "Sair",
      iconSrc: "images/assets/logouticon.svg"
    }
  ]
  activeIndex = 0;

  setActive(index: number) {
    this.activeIndex = index;
  }
}
