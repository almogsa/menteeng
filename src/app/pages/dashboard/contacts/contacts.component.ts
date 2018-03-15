import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import { NbThemeService, NbMediaBreakpoint, NbMediaBreakpointsService } from '@nebular/theme';

import { UserService } from '../../../@core/data/users.service';

@Component({
  selector: 'ngx-contacts',
  styleUrls: ['./contacts.component.scss'],
  templateUrl: './contacts.component.html',
})
export class ContactsComponent implements OnInit, OnDestroy {

  recent: any[];
  breakpoint: NbMediaBreakpoint;
  breakpoints: any;
  contacts:any;
  users:any;
  themeSubscription: any;
  @Input() title: string;
  @Input() search: string;
  constructor(private userService: UserService,
              private themeService: NbThemeService,
              private breakpointService: NbMediaBreakpointsService) {

    this.breakpoints = this.breakpointService.getBreakpointsMap();
    this.themeSubscription = this.themeService.onMediaQueryChange()
      .subscribe(([oldValue, newValue]) => {
        this.breakpoint = newValue;
      });
  }

  ngOnInit() {

    this.userService.getUsers()
      .subscribe((users: any) => {
        this.contacts = [];
        this.users = users;
        this.recent = [];
        console.log('SErach ' + this.search);
        for (const curUser in users) {
          if (users.hasOwnProperty(curUser)) {
            console.log(curUser);
            this.contacts.push(users[curUser])
          }
        }

        this.recent = [
          {user: users.alan, type: 'home', time: '9:12 pm'},
          {user: users.eva, type: 'home', time: '7:45 pm'},
          {user: users.nick, type: 'mobile', time: '5:29 pm'},
          {user: users.lee, type: 'mobile', time: '11:24 am'},
          {user: users.jack, type: 'mobile', time: '10:45 am'},
          {user: users.kate, type: 'work', time: '9:42 am'},
          {user: users.kate, type: 'work', time: '9:31 am'},
          {user: users.jack, type: 'mobile', time: '8:01 am'},
        ];
      });
  }
  ngOnChanges(changes){
    this.contacts = [];

    if (changes && changes.search){
      for (const curUser in this.users) {
        if (this.users.hasOwnProperty(curUser)) {
          console.log(curUser);
          let user = this.users[curUser];
          if (user && user.skills && user.skills.length > 0 ) {
            for (const cat of user.skills) {
              if (cat.category.toLowerCase().indexOf(changes.search.currentValue.toLowerCase()) > -1 || cat.sub_category.toLowerCase().indexOf(changes.search.currentValue.toLowerCase()) > -1)
                this.contacts.push(user);
            }
          }

        }
      }
    }
    console.log('change')
  }
  ngOnDestroy() {
    this.themeSubscription.unsubscribe();
  }
}
