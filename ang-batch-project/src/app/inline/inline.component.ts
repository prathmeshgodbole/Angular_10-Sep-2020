import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inline',
  template: `
    <p>
      inline works!
    </p>
  `,
  styles: [
  ]
})
export class InlineComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
