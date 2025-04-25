import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { ButtonComponent } from '../../components/button/button.component';
import { CardComponent } from '../../components/card/card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [NavbarComponent, ButtonComponent, CardComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  termos = [
    {numero: 1, color: "#E2F4C5"},
    {numero: 2, color: "#EEE7DA"},
    {numero: 3, color: "#A5DD9B"},
    {numero: 4, color: "#C5EBAA"},
    {numero: 5, color: "#FFFFDD"},
    {numero: 6, color: "#AFC8AD"},


  ]
}
