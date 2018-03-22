import {Component, EventEmitter, Output} from '@angular/core';
import {UserService} from "../../../../@core/data/users.service";
import {Router} from "@angular/router";
import {DashboardComponent} from "../../../dashboard/dashboard.component";

@Component({
  selector: 'ngx-dropdown-buttons',
  styleUrls: ['./dropdown-button.component.scss'],
  templateUrl: './dropdown-button.component.html',
})

export class DropdownButtonsComponent {
  @Output() onRefreshClick = new EventEmitter<boolean>();

  selectedGrade = 0;
  selectedClass = 0;
  selectedGradeTitle = 'Choose grade';
  selectedClassTitle = 'Choose class';

  constructor(private userService: UserService, private router: Router) {
    this.userService.getSettings().subscribe((settings: any) => {
      if (settings.hasOwnProperty('gradeFilter')) {
        this.selectedGrade = settings['gradeFilter'];
      }
      if (settings.hasOwnProperty('classFilter')) {
        this.selectedClass = settings['classFilter'];
      }
    });
  }
  changeGrade(grade) {
    this.selectedGradeTitle = grade;
    this.selectedGrade = grade;
    if (grade.toLowerCase() === 'no filter') {
      grade = '0';
    }
    this.userService.changeSettings('gradeFilter', grade.charAt(0))
  }

  changeClass(choosenClass) {
    this.selectedClassTitle = choosenClass;
    this.selectedClass = choosenClass;
    if (choosenClass.toLowerCase() === 'no filter') {
      choosenClass = '0';
    }
    this.userService.changeSettings('classFilter', choosenClass.substr(choosenClass.length - 1));
  }
  refresh() {
      this.onRefreshClick.emit(true);
  }
}
