import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-FAsT';                                          // replace this with your app's title
  foundingYear = Number(new Date().getFullYear().toString()); // replace this with a static number
  author = 'Your name here';                                  // replace this with your name or your company name
}
