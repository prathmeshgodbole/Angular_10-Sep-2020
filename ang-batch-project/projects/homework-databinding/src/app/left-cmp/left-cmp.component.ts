import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-left-cmp',
  templateUrl: './left-cmp.component.html',
  styleUrls: ['./left-cmp.component.css']
})
export class LeftCmpComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  @Output('change')
 change: EventEmitter<string>=new EventEmitter()


name:string;


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



onclick(ev:Event){
 console.log(ev.target)
 this.changeName()
}

//  this.name="Hellow";
// onclick(value){
//   console.log(value)
// }

private changeName(){
  console.log( `Dashboard is Clicked - ${this.Dashboard.nativeElement.type}`)
  console.log( `Orders is Clicked - ${this.Orders.nativeElement.type}`)
  console.log( `Products is Clicked - ${this.Products.nativeElement.type}`)
  console.log( `Customers is Clicked - ${this.Customers.nativeElement.type}`)
  console.log( `Reports is Clicked - ${this.Reports.nativeElement.type}`)

var header:string='';
//  var str:string;
//  var res:string;
if(this.Dashboard.nativeElement.type=='click'){
//   str = header.replace("hi", "Dashboard");
// console.log(str);
// header=header.replace('Homework','Dashboard');
// str='Dashboard';
// res=header.concat(str);
// console.log(res);
header='Dashboard';

}
if(this.Orders.nativeElement.type=='click'){

  header='Oreders';
  }
  if(this.Products.nativeElement.type=='click'){
    header='Products';
    }
    if(this.Customers.nativeElement.type=='click'){
      header='Customers';
    }
    if(this.Reports.nativeElement.type=='click'){
      header='Reports';
    }

this.name=header;
console.log(this.name);
 this.change.emit(this.name);
//  this.name=res;


}

}
