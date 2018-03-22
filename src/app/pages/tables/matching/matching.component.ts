import { Component, OnInit } from '@angular/core';
import {BodyOutputType, Toast, ToasterConfig, ToasterService} from "angular2-toaster";
import {Router} from "@angular/router";
import {UserService} from "../../../@core/data/users.service";
@Component({
  selector: 'matching',
  templateUrl: './matching.component.html',
  styleUrls: ['./matching.component.scss']
})
export class MatchingComponent implements OnInit {

  startMatching: boolean = false;
  title:string = 'Start matching !';
  cb:any;
  counter: number = 0;
  config: any;
  percent: number = 65;
  iteration: number = 0;
  color: string = '#78C000';
  constructor( private toasterService: ToasterService,
              private router: Router,
               private userService: UserService) {
    this.cb = (percent: number) : string => {
     this.counter = percent;
     return percent.toString();
    }
  }

  ngOnInit() {
  }
   formatSubtitle = (percent: number) : string => {
   this.counter = this.counter + 1;
     percent = this.counter;
    if(percent === 100){
      setTimeout(() => {
        this.router.navigate(['dashboard']);
      },6000);
      this.showToast('Matching has been successfully finished','success');
      this.approveCourses();
      this.title = "Done!"
    // startMatching = true;
      return "Congratulations!"
    }else if(percent >100) {
      return "Congratulations!"
    } else if(percent > this.percent  ) {
      let c = percent > 80 ? 'success' : 'warning'
      this.showToast('Matching has been successfully finished', c);
      this.approveCourses();
      this.title = "Done!";
      return "Success Rate";
    }
    else if(percent >= 70){
      return "Preparing results"
    }else if(percent >= 40){
      return "Analyzing Matching"
    }
    else if(percent >= 20){
      return "Fetch Students"
    }
    else if(percent >= 10){
      return "Fetch Mentors"
    }
    else if(percent > 0){
      return "Start matching"
    }else {
      return "Not started"
    }
  }
  approveCourses() {
    this.userService.getUsers()
      .subscribe((users: any) => {
        for (const curUser in users) {
          if (users.hasOwnProperty(curUser)) {
            let user = users[curUser];
            if (user && user.courses && user.courses.length > 0) {
              user.courses.forEach((c, index) => {
                if ( index === 0 ) {
                  c.status = 'approved';
                }else {
                  c.status = 'rejected';
                }
              })
        //      user.courses[0].status = 'approved';
              this.userService.updateUser(user);
            }
          }
        }
      });
  }
  startMatch() {
    let percentRange: any[] = [63, 87 , 92 , 95];
    this.startMatching = true;
   // this.percent = Math.floor(Math.random() * (100 - 60 + 1)) + 60;
    this.percent = percentRange[this.iteration];
    this.iteration = this.iteration + 1;
    this.counter = 0;
    this.title = 'in progress ...';
  }
  private showToast(body?: string, type: string) {
    let defaultBody = 'Matching has been successfully finished'
    if (body && body.length > 0) {
      defaultBody = body;
    }
    this.config = new ToasterConfig({
      positionClass: 'toast-top-center',
      animation: 'fade'
    });
    const toast: Toast = {
      type: type,
      title: null,
      body: defaultBody,
    //  timeout: this.timeout,
      showCloseButton: true,
      bodyOutputType: BodyOutputType.TrustedHtml,
    };
    this.toasterService.popAsync(toast);
  }
}
