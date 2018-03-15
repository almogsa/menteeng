import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TablesComponent } from './tables.component';
import { SmartTableComponent } from './smart-table/smart-table.component';
import {AllUsersComponent} from "./all-users/all-users.component";

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
    }],
  component: TablesComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TablesRoutingModule { }

export const routedComponents = [
  TablesComponent,
  SmartTableComponent,
  AllUsersComponent
];
