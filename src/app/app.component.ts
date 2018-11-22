import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showDecode = false;
  chnageVar(a) {
    if (a === 'decodePlox') {
      this.showDecode = true;
    }
    if (a === 'encodePlox') {
      this.showDecode = false;
    }
  }
}
