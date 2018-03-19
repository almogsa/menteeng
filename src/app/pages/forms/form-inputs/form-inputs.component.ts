import { Component } from '@angular/core';
import {NbAuthJWTToken, NbAuthService, NbTokenService} from '@nebular/auth';
import {NbMenuService, NbSidebarService} from '@nebular/theme';
import {UserService} from '../../../@core/data/users.service';
import {Router} from '@angular/router';
import {AnalyticsService} from '../../../@core/utils/analytics.service';

export interface  User {

  name: string;
  isStudent: boolean;
  picture: string;
  category: string ;
  sub_category: string;
  remark: string;
  class: string;
}
@Component({
  selector: 'ngx-form-inputs',
  styleUrls: ['./form-inputs.component.scss'],
  templateUrl: './form-inputs.component.html',
})
export class FormInputsComponent {

  starRate = 2;
  heartRate = 4;
  user: any;
  model: User ;
  categories  = [] ;
  classes = [];
  constructor(private sidebarService: NbSidebarService,
              private menuService: NbMenuService,
              private userService: UserService,
              private analyticsService: AnalyticsService,
              private router: Router,
              private tokenService: NbTokenService,
              private authService: NbAuthService) {

    this.model = {name : '', isStudent :  true, picture : '', category: '1', remark: '', class: '1'};
    this.authService.onTokenChange()
      .subscribe((token: NbAuthJWTToken) => {
        if (token.isValid()) {
          const userName = token.token.split('@')[0];
          this.userService.getUsers()
            .subscribe((users: any) => {
              this.user = users[token.token];
              this.model.name = this.user.name;
              this.model.picture = this.user.picture;
              this.model.class = this.user.class;
              this.model.category = this.user.category;
              this.model.isStudent = this.user.isStudent;
              this.model.remark = this.user.remark;
            });
        }

      });
    this.categories = [ {name: 'Football', id: 1}, {name: 'Guitar Hero', id: 2} ,
      {name: 'Climbing', id: 3} , {name: 'Books', id: 4} , {name: 'TV', id: 5} ];
    this.classes = [{name: 'א' , id: 1} , {name: 'ב', id: 2} , {name: 'ג', id: 3} ,
      {name: 'ד' , id: 4} , {name: 'ה' , id: 5} , {name: 'ו'  , id: 6}];

  }
  public toggleType() {
    if (this.model.isStudent) {
      this.model.isStudent = false;
    } else {
      this.model.isStudent = true;
    }
  }
  public getCurrentType() {
    return  this.model.isStudent;
  }
  public submit() {
    console.log( ' USER for submit : ' + JSON.stringify(this.model));
  }
}
