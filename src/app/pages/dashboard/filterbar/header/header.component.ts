import {Component, Input, OnInit} from '@angular/core';
import {UserService} from "../../../../@core/data/users.service";

@Component({
  selector: 'ngx-filter-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  model: any;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
  }

}
