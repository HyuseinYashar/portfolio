import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {


peel() {
  
}

  skills = [
    {svg: '/assets/img/skills/html.svg' , label : 'HTML'},
    {svg: '/assets/img/skills/css.svg' , label : 'CSS'},
    {svg: '/assets/img/skills/skills8.svg' , label : 'JavaScript'},
    {svg: '/assets/img/skills/skills7.svg' , label : 'Typescript'},
    {svg: '/assets/img/skills/python.svg' , label : 'Python'},
    {svg: '/assets/img/skills/skills4.svg' , label : 'API'},
    {svg: '/assets/img/skills/skills6.svg' , label : 'Firebase'},
    {svg: '/assets/img/skills/restapi.svg' , label : 'RestApi'},
    {svg: '/assets/img/skills/skills5.svg' , label : 'GIT'},
    {svg: '/assets/img/skills/skills2.svg' , label : 'Material Design'}
  ];
 
}
