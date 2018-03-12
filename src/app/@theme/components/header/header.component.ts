import { Component, Input, OnInit } from '@angular/core';

import { NbMenuService, NbSidebarService } from '@nebular/theme';
import { UserService } from '../../../@core/data/users.service';
import { AnalyticsService } from '../../../@core/utils/analytics.service';
import {NbAuthJWTToken, NbAuthService, NbTokenService} from '@nebular/auth';
import {Router} from '@angular/router';

@Component({
  selector: 'ngx-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {


  @Input() position = 'normal';

  user: any;
  userMenu = [{ title: 'Profile' }, { title: 'Log out' }];

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
            });
          // here we receive a payload from the token and assigne it to our `user` variable
        //  this.user = token;
        }

      });
  }

  ngOnInit() {
    this.menuService.onItemClick().subscribe(tag => {
      if (tag.item.title === 'Profile') {
        this.router.navigate(['pages/forms/inputs']);
      }
      if (tag.item.title === 'Log out') {
        this.tokenService.clear();
        this.router.navigate(['auth/login']);
      }

    });

    /*this.userService.getUsers()
      .subscribe((users: any) => this.user = users.almog);*/
  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');
    return false;
  }
  toggleSettings(): boolean {
    this.sidebarService.toggle(false, 'settings-sidebar');
    return false;
  }
  goToHome() {
    this.menuService.navigateHome();
  }

  startSearch() {
    this.analyticsService.trackEvent('startSearch');
  }
}
