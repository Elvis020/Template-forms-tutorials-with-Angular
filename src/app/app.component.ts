import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  email = '';

  constructor(){}

  onSubmit() {
    alert(`Your email: ${this.email} has been submitted` );
  }

}
