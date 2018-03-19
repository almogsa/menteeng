import { StudentStatusComponent } from './student-status/student-status.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TablesComponent } from './tables.component';
import {ButtonViewComponent, SmartTableComponent} from './smart-table/smart-table.component';
import {AllUsersComponent} from './all-users/all-users.component';
import {AllStudentsComponent} from './all-students/all-students.component';
import {MentorSkillComponent} from './mentor-skill/mentor-skill.component';
import {MatchingComponent} from './matching/matching.component';

const routes: Routes = [{
  path: '',
  children: [
    {
      path: 'smart-table',
      component: SmartTableComponent,
    },
    {
      path: 'all-users',
      component: AllUsersComponent,
    },
    {
      path: 'all-students',
      component: AllStudentsComponent,
    },
    {
      path: 'student-status',
      component: StudentStatusComponent,
    },
    {
      path: 'mentor-skill',
      component: MentorSkillComponent,
    },
    {
      path: 'matching',
      component: MatchingComponent,
    }],
  component: TablesComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TablesRoutingModule { }

export const routedComponents = [
  ButtonViewComponent,
  TablesComponent,
  SmartTableComponent,
  AllUsersComponent,
  AllStudentsComponent,
  StudentStatusComponent,
];
