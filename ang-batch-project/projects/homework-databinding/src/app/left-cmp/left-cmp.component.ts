import { Component, OnInit,  Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-left-cmp',
  templateUrl: './left-cmp.component.html',
  styleUrls: ['./left-cmp.component.css']
})
export class LeftCmpComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

    // clkvalue: string;
    // outvalue: string;

    @Output('clickvalue')
    clickValue: EventEmitter<string> = new EventEmitter();

    clk(btn: number) {
      if (btn == 1) {
        this.clickValue.emit('Dashboard');
      } else if (btn == 2) {
        this.clickValue.emit('Orders');
      } else if (btn == 3) {
        this.clickValue.emit('Products');
      } else if (btn == 4) {
        this.clickValue.emit('Customers');
      } else if (btn == 5) {
        this.clickValue.emit('Reports');
      } else {
        this.clickValue.emit('Integrations');
      }
    }

}



