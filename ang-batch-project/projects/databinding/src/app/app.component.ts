import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // For Property Binding
  title = 'databinding';

  name='Prathmesh';
  titleinfo(){
    return ` Author name is ${this.name} `;
  }

  brd='1px solid green';

  // For EVENT Binding
  fntwt=500;

  clk(btn: number){

    if(btn == 1){
    this.fntwt += 250;
    }
    else{
      this.fntwt -= 250;
    }

    console.log(` Button Clicked `);
  }
}
