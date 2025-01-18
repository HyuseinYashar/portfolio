import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AboutMeComponent } from './main/about-me/about-me.component';
import { ContactComponent } from './main/contact/contact.component';
import { HeroComponent } from './main/hero/hero.component';
import { SkillsComponent } from './main/skills/skills.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,HeroComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';
}
