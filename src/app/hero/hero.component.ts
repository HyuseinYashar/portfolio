import { Component } from '@angular/core';
import { HeaderComponent } from '../shared/header/header.component';
import { NavbarComponent } from "../shared/navbar/navbar.component";

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [ NavbarComponent,HeaderComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {

}
