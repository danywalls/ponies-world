import { Component } from '@angular/core';

import { PonyButtonComponent } from './components/pony-button/pony-button.component';

@Component({
  selector: 'app-root',
  imports: [PonyButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
