import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navbutton',
  imports: [CommonModule],
  templateUrl: './navbutton.component.html',
  styleUrl: './navbutton.component.css'
})
export class NavbuttonComponent {
  @Input() label: string = 'Notificações';
  @Input() iconSrc: string = 'assets/images/bellicon.svg';
  @Input() active: boolean = false;
}
