import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-concept',
  templateUrl: './project-concept.component.html',
  styleUrls: ['./project-concept.component.css']
})
export class ProjectConceptComponent implements OnInit {

  bkCl: string
  constructor() { }

  ngOnInit(): void {
  }

  sayColor(ev: KeyboardEvent) {
    console.log(ev.target['value'])
    this.bkCl = ev.target['value']
  }

}
