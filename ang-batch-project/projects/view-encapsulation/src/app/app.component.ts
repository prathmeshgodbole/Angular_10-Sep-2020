import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // encapsulation:ViewEncapsulation.None
  // encapsulation:ViewEncapsulation.ShadowDom
  encapsulation:ViewEncapsulation.Emulated
  // encapsulation:ViewEncapsulation.Native
})
export class AppComponent {
  title = 'view-encapsulation';
}
