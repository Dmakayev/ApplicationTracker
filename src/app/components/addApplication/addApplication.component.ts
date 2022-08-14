import {Component, OnInit, ViewChild} from '@angular/core';
import {ItemServiceService} from "../../services/item-service.service";
import {Item} from "../../models/item";
import {FlashMessagesService} from "flash-messages-angular";
import {NgForm} from "@angular/forms";


@Component({
  selector: 'app-addApplication',
  templateUrl: './addApplication.component.html',
  styleUrls: ['./addApplication.component.css']
})
export class AddApplicationComponent implements OnInit {
  apps: Item = {
    id:'',
    companyName:'',
    position:'',
    applicationStatus:'Pending',
    dateApplied:'',
    jobDashboardURL: ''
  }

  @ViewChild('appsForm') form:any;


  constructor(private flashMessage:FlashMessagesService,
              private appService: ItemServiceService) { }

  ngOnInit(): void {
  }

  onSubmit({value, valid}: NgForm){
    if(!valid) {
      this.flashMessage.show('Please Fill Out Form', {cssClass: 'alert-danger', timeout:4000});

    }else {
      this.appService.newApplication(value);
      this.flashMessage.show('New Application Saved', {cssClass: 'alert-success', timeout:4000});


    }
  }

}