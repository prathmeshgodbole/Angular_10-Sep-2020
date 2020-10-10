import { TabData } from './domain';
import { Component, OnInit } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-data-tab',
  templateUrl: './data-tab.component.html',
  styleUrls: ['./data-tab.component.css']
})

export class DataTabComponent implements OnInit {
  quotations: Array<TabData> = new Array()
  // isTotalChecked = false
  isTaxChecked = false

  constructor() { }

  ngOnInit(): void {
    this.quotations.push({ id: uuidv4(), item: 'Pen', qty: 1000, unitPrice: 250, tax: 12, total: 0 })
    this.quotations.push({ id: uuidv4(), item: 'Pencil', qty: 850, unitPrice: 102, tax: 10, total: 0 })
    this.quotations.push({ id: uuidv4(), item: 'Eraser', qty: 3268, unitPrice: 10, tax: 12, total: 0 })
    this.quotations.push({ id: uuidv4(), item: 'Sharpner', qty: 5000, unitPrice: 5, tax: 6, total: 0 })
    this.quotations.push({ id: uuidv4(), item: 'NoteBook', qty: 6893, unitPrice: 150, tax: 13, total: 0 })


    console.log(this.quotations)
  }

  addData(item: string, qty: number, unitPrice: number, tax: number) {
    this.quotations.push({ id: uuidv4(), item, qty, unitPrice, tax, total: 0 })
  }

  removeData(id: string) {
    // const qt = this.quotations.find(el => el.id == id)
    // console.log(qt)

    const upQts = this.quotations.filter(el => el.id != id)
    this.quotations = upQts
  }

  onChangeTotal(ev: Event) {
  //   if( this.isTotalChecked = ev.target['checked']){
  //     this.isTotalChecked = ev.target['checked']
  // }
 if( this.isTaxChecked = ev.target['checked']){
this.isTaxChecked = ev.target['checked']
  }
  }



}
