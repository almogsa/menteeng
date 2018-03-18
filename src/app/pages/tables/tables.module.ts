import { NgModule } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ThemeModule } from '../../@theme/theme.module';
import { TablesRoutingModule, routedComponents } from './tables-routing.module';
import { SmartTableService } from '../../@core/data/smart-table.service';
import {DashboardModule} from '../dashboard/dashboard.module';
import {ButtonViewComponent} from "./smart-table/smart-table.component";


@NgModule({
  imports: [
    ThemeModule, DashboardModule,
    TablesRoutingModule,
    Ng2SmartTableModule,
  ],
  declarations: [
    ...routedComponents
  ],
  providers: [
    SmartTableService,
  ],
  entryComponents: [ButtonViewComponent]
})
export class TablesModule { }
