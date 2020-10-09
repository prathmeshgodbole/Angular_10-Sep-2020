import { ElementRef } from '@angular/core';
import { ViewChild } from '@angular/core';
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

  // MOUSE EVENTS

  counter = 0;

  dblclick(){
   return this.counter++;
  }

  drag(){
    return this.counter++;
  }

  dragover(){
    return this.counter++;
  }

  mousedown(){
    return this.counter++;
  }

  mouseup(){
    return this.counter++;
  }

  mouseenter(){
    return this.counter++;
  }

  mouseleave(){
    return this.counter++;
  }

  mouseover(){
    return this.counter++;
  }


calcProg:number=0;

  onProgress(calPrg:number){
    console.log(`App Component-Profile Progress Called `)
    this.calcProg=calPrg;
  }

//
@ViewChild('para',{static:true})
para:ElementRef<HTMLElement>

ngOnInit(){
  console.log(this.para)
}
//

}
