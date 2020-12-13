import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  search: any
  title = 'atelier-angluar';


  searchMovie(val) {
    this.search= val
  }
}
