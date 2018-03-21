import {Component, Input, OnChanges, OnDestroy, OnInit} from '@angular/core';
import { NbThemeService } from '@nebular/theme';

@Component({
  selector: 'ngx-d3-advanced-pie',
  template: `
    <ngx-charts-advanced-pie-chart
      [scheme]="colorScheme"
      [results]="single">
    </ngx-charts-advanced-pie-chart>
  `,
})
export class D3AdvancedPieComponent implements OnDestroy, OnInit, OnChanges {
  single;
  @Input() isRefresh;
  colorScheme: any;
  themeSubscription: any;

  constructor(private theme: NbThemeService) {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {
      const colors: any = config.variables;
      this.colorScheme = {
        domain: [colors.primaryLight, colors.infoLight, colors.successLight, colors.warningLight, colors.dangerLight],
      };
    });
  }

  @Input() data: any[];
  ngOnChanges(changes) {
    console.log(changes);
    this.ngOnInit();
  }
  ngOnInit(): void {
    this.single = this.data[0];
  }
  ngOnDestroy(): void {
    if (!!this.themeSubscription) {
      this.themeSubscription.unsubscribe();
    }
  }
}
