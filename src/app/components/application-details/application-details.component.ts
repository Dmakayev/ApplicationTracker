import { Component, OnInit } from '@angular/core';
import {ItemServiceService} from "../../services/item-service.service";
import {Router, ActivatedRoute, Params} from "@angular/router";
import {Item} from "../../models/item";
import {FlashMessagesService} from "flash-messages-angular";

@Component({
  selector: 'app-application-details',
  templateUrl: './application-details.component.html',
  styleUrls: ['./application-details.component.css']
})
export class ApplicationDetailsComponent implements OnInit {
  id: string | undefined;
  app: Item | undefined;


  constructor(
      private appService: ItemServiceService,
      private router: Router,
      private route: ActivatedRoute,
      private flashMessage: FlashMessagesService
  ) { }

  ngOnInit(): void {
  }

}
