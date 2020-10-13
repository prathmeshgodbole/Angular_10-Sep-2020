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
    this.details.push({ id: uuidv4(),  Company_Name: 'Mphasis', Company_Description: 'US Based', Contact_Number: 1234567890, Email: 'mphasis@gmail.com', State: 'Maharashtra' })
    this.details.push({ id: uuidv4(),  Company_Name: 'Accenture', Company_Description: 'Headquarter in bengluru', Contact_Number: 9876543210, Email: 'acc@gmail.com', State: 'Karnataka' })
    this.details.push({ id: uuidv4(),  Company_Name: 'Oracle', Company_Description: 'Database related', Contact_Number: 1122334455, Email:'oracle@gmail.com', State: 'Goa' })



    console.log(this.details)
  }

  addData( Company_Name: string, Company_Description: string, Contact_Number: number, Email: string,State:string) {
    this.details.push({ id: uuidv4(),  Company_Name, Company_Description, Contact_Number, Email, State })
  }

}
