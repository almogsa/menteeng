import { NgModule } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ThemeModule } from '../../@theme/theme.module';
import { TablesRoutingModule, routedComponents } from './tables-routing.module';
import { SmartTableService } from '../../@core/data/smart-table.service';
import {DashboardModule} from '../dashboard/dashboard.module';
import {ButtonViewComponent} from './smart-table/smart-table.component';
import { MentorSkillComponent } from './mentor-skill/mentor-skill.component';
import { MatchingComponent } from './matching/matching.component';
import {RoomsComponent} from '../dashboard/rooms/rooms.component';
import {RoomSelectorComponent} from "../dashboard/rooms/room-selector/room-selector.component";


@NgModule({
  imports: [
    ThemeModule, DashboardModule,
    TablesRoutingModule,
    Ng2SmartTableModule,
  ],
  declarations: [
    ...routedComponents,
    MentorSkillComponent,
    MatchingComponent,
  ],
  providers: [
    SmartTableService,
  ],
  entryComponents: [ButtonViewComponent]
})
export class TablesModule { }
