import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'databinding';

  name='Prathmesh';
  titleinfo(){
    return ` Author name is ${this.name} `;
  }

  brd='1px solid green';

}
