import {Component, input} from '@angular/core';
import {ButtonThemeColor, KENDO_BUTTON} from '@progress/kendo-angular-buttons';

@Component({
  selector: 'app-pony-button',
  imports: [KENDO_BUTTON],
  templateUrl: './pony-button.component.html',
  styleUrl: './pony-button.component.scss',
})
export class PonyButtonComponent {
  label = input<string>('Accept');
  theme = input<ButtonThemeColor>('base');
}
