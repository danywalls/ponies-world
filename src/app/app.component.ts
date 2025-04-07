import { Component } from '@angular/core';

import { PonyButtonComponent } from './components/pony-button/pony-button.component';
import {KENDO_BUTTON} from '@progress/kendo-angular-buttons';
import {KENDO_INDICATORS} from '@progress/kendo-angular-indicators';

@Component({
  selector: 'app-root',
  imports: [PonyButtonComponent, KENDO_BUTTON, KENDO_INDICATORS],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
