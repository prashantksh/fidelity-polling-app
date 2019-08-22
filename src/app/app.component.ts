import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  original: any = {
    today: new Date()
  };

  parentHandler() {
    this.original.today = 'Mutation';
  }
}
