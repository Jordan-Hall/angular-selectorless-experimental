import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {bootstrapApplication} from '@angular/platform-browser';
import { Hello } from './app/demo.component'
import { SillyStupidComponent } from './app/silly-stupid.component';

@Component({
  selector: 'app-root',
  template: `
    <label for="name">Name:</label>
    <input type="text" id="name" [(ngModel)]="name" placeholder="Enter a name here" />
    <hr />
    <h1>Hello {{ name }}!</h1>
    <hello />
    <silly-stupid />
  `,
  imports: [FormsModule],
})
export class DemoComponent {
  name = '';
}

bootstrapApplication(DemoComponent);
