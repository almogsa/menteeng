import { Component } from '@angular/core';
import {UserService} from "../../../../@core/data/users.service";

@Component({
  selector: 'ngx-dropdown-buttons',
  styleUrls: ['./dropdown-button.component.scss'],
  templateUrl: './dropdown-button.component.html',
})

export class DropdownButtonsComponent {
  selectedGrade: string = 'Choose grade for filtering';
  selectedClass: string = 'Choose class';

  constructor(private userService: UserService) {
    this.userService.getSettings().subscribe((settings: any) => {
      if (settings.hasOwnProperty('gradeFilter')) {
        settings['gradeFilter'] = this.selectedGrade;
      }
      if (settings.hasOwnProperty('classFilter')) {
        settings['classFilter'] = this.selectedClass;
      }
    });
  }
  changeGrade(grade) {
    this.selectedGrade = grade;
    this.userService.changeSettings('gradeFilter', grade.charAt(0))
  }

  changeClass(choosenClass) {
    this.selectedClass = choosenClass;
    this.userService.changeSettings('classFilter', choosenClass.substr(choosenClass.length - 1));
  }
}
