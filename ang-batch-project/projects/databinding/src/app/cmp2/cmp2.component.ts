import { ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cmp2',
  templateUrl: './cmp2.component.html',
  styleUrls: ['./cmp2.component.css']
})
export class Cmp2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

progress:number

@ViewChild('Biodata')
Biodata: ElementRef<HTMLInputElement>

@ViewChild('Demographic')
Demographic: ElementRef<HTMLInputElement>

@ViewChild('Educational')
Educational: ElementRef<HTMLInputElement>

@ViewChild('Personal')
Personal: ElementRef<HTMLInputElement>



  checkChange(ev: Event){
    console.log(ev.target)
    this.calculateProgress()

  // if(ev.target['id']=='Biodata')
  // {
  //   console.log(`Biodata is Checked = ${ev.target['checked']}`)
  // }
  // else if(ev.target['id']=='Demographic')
  // {
  //   console.log(`Demographic is Checked = ${ev.target['checked']}`)
  // }
  // else if(ev.target['id']=='Educational')
  // {
  //   console.log(`Educational is Checked = ${ev.target['checked']}`)
  // }
  // else
  // {
  //   console.log(`Personal is Checked = ${ev.target['checked']}`)
  // }
}


private calculateProgress(){
 console.log( `Biodata is Checked - ${this.Biodata.nativeElement.checked}`)
 console.log( `Demographic is Checked - ${this.Demographic.nativeElement.checked}`)
 console.log( `Educational is Checked - ${this.Educational.nativeElement.checked}`)
 console.log( `Personal is Checked - ${this.Personal.nativeElement.checked}`)
}

}
