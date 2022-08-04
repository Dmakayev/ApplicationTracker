import { Component, OnInit } from '@angular/core';
import {Item} from "../../models/item";
import {ItemServiceService} from "../../services/item-service.service";

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  items: Item[] | undefined;

  constructor(private itemService: ItemServiceService) { }

  ngOnInit(): void {
    this.items = this.itemService.getItems();
  }

  goToDashboard(item: Item) {
    return item.jobDashboardURL;
  }
}
