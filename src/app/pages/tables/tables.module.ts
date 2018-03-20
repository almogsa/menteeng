import { NgModule } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ThemeModule } from '../../@theme/theme.module';
import { TablesRoutingModule, routedComponents } from './tables-routing.module';
import { SmartTableService } from '../../@core/data/smart-table.service';
import {DashboardModule} from '../dashboard/dashboard.module';
import {ButtonViewComponent} from './smart-table/smart-table.component';
import { MentorSkillComponent } from './mentor-skill/mentor-skill.component';
import { MatchingComponent } from './matching/matching.component';
import {ChartsModule} from "../charts/charts.module";
import {ToasterModule} from "angular2-toaster";
import {ComponentsModule} from "../components/components.module";
import {NgCircleProgressModule} from 'ng-circle-progress';


@NgModule({
  imports: [
    ThemeModule, DashboardModule,
    TablesRoutingModule,
    ChartsModule,
    Ng2SmartTableModule,
    ToasterModule,
    ComponentsModule,
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300
    }),
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
