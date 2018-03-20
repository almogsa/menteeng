import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../@core/data/users.service";

@Component({
  selector: 'matching',
  templateUrl: './matching.component.html',
  styleUrls: ['./matching.component.scss']
})
export class MatchingComponent implements OnInit {

  constructor(private userService: UserService) {

  }

  ngOnInit() {
  }

}
