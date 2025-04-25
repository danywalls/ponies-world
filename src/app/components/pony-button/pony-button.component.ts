import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-pony-button',
  imports: [],
  templateUrl: './pony-button.component.html',
  styleUrl: './pony-button.component.scss',
})
export class PonyButtonComponent {
  label = input<string>('Accept');
  darkMode = input(false);
  themeClass = computed(() => (this.darkMode() ? 'pony-btn-dark' : 'pony-btn'));
}
