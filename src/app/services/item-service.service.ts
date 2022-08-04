import { Injectable } from '@angular/core';
import {Item} from "../models/item";

@Injectable({
  providedIn: 'root'
})
export class ItemServiceService {
  items: Item[]| undefined;

  constructor() {
    this.items = [
      {
        id: '1',
        companyName: 'Amazon',
        position: 'SDE I',
        applicationStatus:'Submitted',
        dateApplied: new Date(),
        jobDashboardURL: new URL('https://account.amazon.jobs/en-US')
      },
      {
        id: '2',
        companyName: 'Microsoft',
        position: 'Software Engineer',
        applicationStatus:'Submitted',
        dateApplied: new Date(),
        jobDashboardURL: new URL('https://recruit.microsoft.com/actioncenter/submitted')
      },
      {
        id: '3',
        companyName: 'Amazon',
        position: 'Front-End Developer',
        applicationStatus:'Submitted',
        dateApplied: new Date(),
        jobDashboardURL: new URL('https://account.amazon.jobs/en-US')
      }
    ]
  }

  getItems(){
    return this.items;
  }
}
