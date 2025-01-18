import { Component } from '@angular/core';
import { LangToggleComponent } from '../../main/lang-toggle/lang-toggle.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [LangToggleComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

}
