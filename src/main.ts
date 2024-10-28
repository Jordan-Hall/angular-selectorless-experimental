import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {bootstrapApplication} from '@angular/platform-browser';
import { Hello } from './app/demo.component'

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <label for="name">Name:</label>
    <input type="text" id="name" [(ngModel)]="name" placeholder="Enter a name here" />
    <hr />
    <h1>Hello {{ name }}!</h1>
    <hello />
  `,
  imports: [FormsModule, Hello],
})
export class DemoComponent {
  name = '';
}

bootstrapApplication(DemoComponent);
