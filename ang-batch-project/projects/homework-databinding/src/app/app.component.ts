import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'homework-databinding';

  dispName:string='';

  onChange(dName:string){
    console.log(`Name is changed `)
    this.dispName=dName;
  }
}

