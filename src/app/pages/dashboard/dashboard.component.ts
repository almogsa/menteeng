import { Component } from '@angular/core';
import {UserService} from "../../@core/data/users.service";

@Component({
  selector: 'ngx-dashboard',
  styleUrls: ['./dashboard.component.scss'],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {
  private lastSettings;
  private lastUsers;

  public matchingData;
  public enrolmentData;
  public approvedMenteengsData;
  public approvedMenteengsCount = 0;
  public pendingMenteengsCount = 0;
  public rejectedMenteengsCount = 0;
  private studentCount = 0;
  private mentorsCount = 0;
  private enrolledStudentCount = 0;

  loadData(users, settings) {
    if (!users || !settings) {
      return;
    }
    const grade = settings['gradeFilter'];
    const chosenClass = settings['classFilter'];
    for (const curUser in users) {
      if (users.hasOwnProperty(curUser)) {
        if ((users[curUser].grade === grade || grade === 0) &&
          (chosenClass === 0 || users[curUser].class === chosenClass)) {
          if (users[curUser].position === 'student'
            || !!users[curUser].courses && users[curUser].courses.length > 0) {
            this.studentCount++;
            if (!!users[curUser].courses && users[curUser].courses.length > 0) {
              this.enrolledStudentCount++;
            }
          }
          if (users[curUser].position === 'mentor'
            || !!users[curUser].skills && users[curUser].skills.length > 0) {
            this.mentorsCount++;
            if (users[curUser].skills[0].status === 'approved') {
              this.approvedMenteengsCount++;
            } else if (users[curUser].skills[0].status === 'pending') {
              this.pendingMenteengsCount++;
            } else {
              this.rejectedMenteengsCount++;
            }
          }
        }
      }
    }
    this.matchingData = [
      {
        name: 'Students',
        value: this.studentCount,
      },
      {
        name: 'Mentors',
        value: this.mentorsCount,
      }
    ];
    this.enrolmentData = [
      {
        name: 'Enrolled Students',
        value: this.enrolledStudentCount,
      },
      {
        name: 'Unrolled students',
        value: this.studentCount - this.enrolledStudentCount,
      }
    ];
    this.approvedMenteengsData = [
      {
        name: 'Approved',
        value: this.approvedMenteengsCount,
      },
      {
        name: 'Pending',
        value: this.pendingMenteengsCount,
      },
      {
        name: 'Rejected',
        value: this.rejectedMenteengsCount,
      }
    ];
  }
  constructor(private userService: UserService) {
    this.userService.getSettings().subscribe((settings: any) => {
      if (settings.hasOwnProperty('gradeFilter') && settings.hasOwnProperty('classFilter')) {
        this.lastSettings = settings;
        this.loadData(this.lastUsers, this.lastSettings);
      }
    });
    this.userService.getUsers().subscribe((users: any) => {
      this.lastUsers = users;
      this.loadData(this.lastUsers, this.lastSettings);
    });
  }
}
