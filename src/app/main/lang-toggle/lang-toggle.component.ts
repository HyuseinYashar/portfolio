import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-lang-toggle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lang-toggle.component.html',
  styleUrl: './lang-toggle.component.scss',
})
export class LangToggleComponent {
  isEnglish = true; // Standardmäßig Englisch

  toggleLanguage() {
    this.isEnglish = !this.isEnglish;
    console.log(
      'Sprache umgeschaltet auf:',
      this.isEnglish ? 'Englisch' : 'Deutsch'
    );
  }
}
