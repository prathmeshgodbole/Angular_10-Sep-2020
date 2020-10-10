import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-right-cmp',
  templateUrl: './right-cmp.component.html',
  styleUrls: ['./right-cmp.component.css']
})
export class RightCmpComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  clkv: string;
}
