import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { LangToggleComponent } from '../../lang-toggle/lang-toggle.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NavbarComponent, LangToggleComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
