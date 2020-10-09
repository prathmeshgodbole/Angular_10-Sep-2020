import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-left-cmp',
  templateUrl: './left-cmp.component.html',
  styleUrls: ['./left-cmp.component.css']
})
export class LeftCmpComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

name:string

  @ViewChild('Dashboard')
  Dashboard: ElementRef<HTMLInputElement>

  @ViewChild('Orders')
 Orders: ElementRef<HTMLInputElement>

  @ViewChild('Products')
  Products: ElementRef<HTMLInputElement>

  @ViewChild('Customers')
 Customers: ElementRef<HTMLInputElement>

 @ViewChild('Reports')
  Reports: ElementRef<HTMLInputElement>



// onclick(ev:Event){
//  console.log(ev.target)
//}
//  this.name="Hellow";
onclick(value){
  console.log(value)
}


}
