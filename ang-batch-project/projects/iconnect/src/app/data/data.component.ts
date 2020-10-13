import { Component, OnInit } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
import { TabData } from './domain';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  details: Array<TabData> = new Array()


  constructor() { }

  ngOnInit(): void {
    this.details.push({ id: uuidv4(),  Company_Name: 'Pen', Company_Description: 'a', Contact_Number: 111111, Email: 'abc@gmail.com', State: 'Goa' })
    this.details.push({ id: uuidv4(),  Company_Name: 'Pencil', Company_Description: 'b', Contact_Number: 22222, Email: 'pqr@gmail.com', State: 'Goa' })
    this.details.push({ id: uuidv4(),  Company_Name: 'Eraser', Company_Description: 'c', Contact_Number: 33333, Email:'abc@gmail.com', State: 'Goa' })
    this.details.push({ id: uuidv4(),  Company_Name: 'Sharpner', Company_Description: 'd', Contact_Number:44444, Email: 'xyz@gmail.com', State: 'Goa' })
    this.details.push({ id: uuidv4(),  Company_Name: 'NoteBook', Company_Description: 'e', Contact_Number: 55555, Email: 'bob@gmail.com', State: 'Goa' })


    console.log(this.details)
  }

  addData( Company_Name: string, Company_Description: string, Contact_Number: number, Email: string,State:string) {
    this.details.push({ id: uuidv4(),  Company_Name, Company_Description, Contact_Number, Email, State })
  }

}
