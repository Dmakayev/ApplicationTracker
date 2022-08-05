import { Component, OnInit } from '@angular/core';
import {Item} from "../../models/item";
import {ItemServiceService} from "../../services/item-service.service";
import {Observable} from "rxjs";
import {AngularFireDatabase, AngularFireList, AngularFireObject} from "@angular/fire/compat/database";

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  items: any[] | undefined;
  apps: Item[] | undefined;

  constructor(private itemService: ItemServiceService) {}

  ngOnInit(): void {
    this.itemService.getApplications().subscribe(apps => {
      this.apps = apps;
      console.log(this.apps)
    })

  }

  goToDashboard(item: Item) {
    return item.jobDashboardURL;
  }
}
