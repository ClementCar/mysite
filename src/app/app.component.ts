import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // animations: 
})
export class AppComponent implements OnInit{
  title = 'mysite';
  theme: Theme = 'dark-theme';

  constructor(
    private router: Router,
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    this.initializeTheme();
  }

  switchTheme() {
    this.document.body.classList.replace(this.theme, this.theme === 'light-theme' ? (this.theme = 'dark-theme'): (this.theme = 'light-theme'))
  }

  initializeTheme = () : void => 
  this.renderer.addClass(this.document.body, this.theme);

  // initializeTheme = () : void => {
  //   if (window.matchMedia('(prefers-color-scheme: light)').matches) {
  //     this.renderer.addClass(this.document, this.theme);
  //   } 
  // }

}

export type Theme = 'light-theme' | 'dark-theme';
