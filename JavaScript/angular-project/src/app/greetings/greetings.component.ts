import { Component } from '@angular/core';

@Component({
  selector: 'app-greetings',
  imports: [],
  templateUrl: './greetings.component.html',
  styleUrl: './greetings.component.css'
})
export class GreetingsComponent {
  message: string = 'Hello World!'

  greeting() {
    this.message = 'Hello Angular!'
  }
}
