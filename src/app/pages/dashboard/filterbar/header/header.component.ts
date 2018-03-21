import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UserService} from "../../../../@core/data/users.service";
import {Router} from "@angular/router";
import {DashboardComponent} from "../../dashboard.component";

@Component({
  selector: 'ngx-filter-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() onHeaderRefresh = new EventEmitter<boolean>();
  constructor() {
  }

  ngOnInit() {
  }
  onRefreshClick(value: boolean) {
    this.onHeaderRefresh.emit(true);
  }
}
