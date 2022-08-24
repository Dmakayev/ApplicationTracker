import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Item} from "../../models/item";
import {ItemServiceService} from "../../services/item-service.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FlashMessagesService} from "flash-messages-angular";
import {AuthService} from "../../services/auth.service";


@Component({
  selector: 'app-edit-application',
  templateUrl: './edit-application.component.html',
  styleUrls: ['./edit-application.component.css']
})
export class EditApplicationComponent implements OnInit {
  @Input() app?: Item;
  @Output() refreshList: EventEmitter<any> = new EventEmitter();
  urlID: string | undefined;
  apps: Item | undefined;
  loggedInUser: string | null | undefined;

  currentApp: Item = {
    id:'',
    companyName:'',
    position:'',
    applicationStatus:'',
    dateApplied:'',
    jobDashboardURL: ''
  };
  message = '';
  constructor(
      private appService: ItemServiceService,
      private router: Router,
      private route: ActivatedRoute,
      private authService: AuthService,
      private flashMessage: FlashMessagesService) { }

  ngOnInit(): void {

    this.authService.getAuth().subscribe(auth => {
      if (auth) {
        this.message = '';
        //Get ID from URL
        this.urlID = this.route.snapshot.params['id'];
        // @ts-ignore
        this.appService.getSingleApp(this.urlID, auth.email).subscribe(apps => {
          this.currentApp = apps;
        });
      }
    });


  }

  ngOnChanges(): void {
    this.message = '';
    // @ts-ignore
    // this.currentApp = {...this.app};
    // console.log("Current App: " + this.currentApp);
    // console.log("Passed App: " + this.app);
  }


  updateApplication(): void {
    const data = {
      companyName: this.currentApp.companyName,
      position: this.currentApp.position,
      applicationStatus: this.currentApp.applicationStatus,
      dateApplied: this.currentApp.dateApplied,
      jobDashboardURL: this.currentApp.jobDashboardURL
    };
    if (this.currentApp.id) {

      this.authService.getAuth().subscribe(auth => {
        if (auth) {
          this.appService.updateApplication(this.currentApp.id, data, auth.email)
              .then(() => this.message = 'The Application was updated successfully')
              .catch(err => console.log(err));
        }
      });
      this.flashMessage.show('Application Updated!', {cssClass: 'alert-success', timeout: 4000});

    }
  }

  deleteApplication(): void {
    if (this.currentApp.id) {

      this.authService.getAuth().subscribe(auth => {
        if (auth) {
          this.appService.deleteApplication(this.currentApp.id, auth.email).then(() => {
            this.refreshList.emit();
            this.message = 'The Application was deleted'
          }).catch(err => console.log(err))
        }});
    }
    this.flashMessage.show('Application Deleted!', {cssClass: 'alert-success', timeout:4000});

  }

}
