import { ElementRef } from '@angular/core';
import { Component, Input, OnInit, ContentChild } from '@angular/core';

@Component({
  selector: 'app-cmp1',
  templateUrl: './cmp1.component.html',
  styleUrls: ['./cmp1.component.css']
})
export class Cmp1Component implements OnInit {

  @ContentChild('para',{static:true})
para:ElementRef<HTMLElement>

  constructor() { }

  ngOnInit(): void {
    console.log(this.para)
  }

  @Input()
progress:number=0
}
