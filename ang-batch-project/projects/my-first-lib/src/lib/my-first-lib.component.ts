import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-my-first-lib',
  template: `
    <p>
      my-first-lib works!
    </p>
  `,
  styles: [
  ]
})
export class MyFirstLibComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
