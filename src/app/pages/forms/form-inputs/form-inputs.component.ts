import { Component } from '@angular/core';
import {NbAuthJWTToken, NbAuthService, NbTokenService} from '@nebular/auth';
import {NbMenuService, NbSidebarService} from '@nebular/theme';
import {UserService} from '../../../@core/data/users.service';
import {Router} from '@angular/router';
import {AnalyticsService} from '../../../@core/utils/analytics.service';

@Component({
  selector: 'ngx-form-inputs',
  styleUrls: ['./form-inputs.component.scss'],
  templateUrl: './form-inputs.component.html',
})
export class FormInputsComponent {

  starRate = 2;
  heartRate = 4;
  user: any;
  model = {};
  categories  = [] ;
  classes = [];
  constructor(private sidebarService: NbSidebarService,
              private menuService: NbMenuService,
              private userService: UserService,
              private analyticsService: AnalyticsService,
              private router: Router,
              private tokenService: NbTokenService,
              private authService: NbAuthService) {
    this.authService.onTokenChange()
      .subscribe((token: NbAuthJWTToken) => {
        if (token.isValid()) {
          const userName = token.token.split('@')[0];
          this.userService.getUsers()
            .subscribe((users: any) => {
              this.user = users[userName];
              this.model.name= this.user.name;
              this.model.img= this.user.picture;
              this.model.type = this.user.type;
            });
        }

      });
    this.categories = [ {name: 'Football', id: 1}, {name: 'Guitar Hero', id: 2} ,
      {name: 'Climbing', id: 3} , {name: 'Books', id: 4} , {name: 'TV', id: 5} ];
    this.classes = [{name: 'א' , id: 1} , {name: 'ב', id: 1} , {name: 'ג', id: 1} ,
      {name: 'ד' , id: 1} , {name: 'ה' , id: 1} , {name: 'ו'  , id: 1}];

  }
  public toggleType() {
    if(this.model.type === 'student'){
      this.model.type = 'mentor'
    } else{
      this.model.type = 'student'
    }
  }
  public getCurrentType() {
    return  this.model.type === 'student';
  }
}
