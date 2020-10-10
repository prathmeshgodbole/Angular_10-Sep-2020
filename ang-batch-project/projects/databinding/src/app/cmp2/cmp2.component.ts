// import { EventEmitter } from 'protractor';
import { EventEmitter } from '@angular/core';
import { Output, ViewChild } from '@angular/core';
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


  @Output('profileprogress')
  profileProgress: EventEmitter<number>=new EventEmitter()


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

 var count:number=0;

  if(this.Biodata.nativeElement.checked==true){
count+=25;
 } if(this.Demographic.nativeElement.checked==true){
count+=25;
 }  if(this.Educational.nativeElement.checked==true){
count+=25;
 } if(this.Personal.nativeElement.checked==true){
   count+=25;
 }
this.progress=count;
// return this.Biodata.nativeElement.checked == true || this.Demographic.nativeElement.checked ==true ||
// this.Educational.nativeElement.checked == true || this.Personal.nativeElement.checked ==true ? console.log(count+=25): console.log("Error")

console.log(this.progress)
this.profileProgress.emit(this.progress)

}

}
