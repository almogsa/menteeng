import {AfterViewInit, Component, Input, OnDestroy} from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import {UserService} from '../../../@core/data/users.service';

@Component({
  selector: 'ngx-echarts-pie',
  template: `
    <div echarts [options]="options" class="echart"></div>
  `,
})
export class EchartsPieComponent implements AfterViewInit, OnDestroy {
  options: any = {};
  themeSubscription: any;
  private catMap = {};
  private categories = [];
  private data = [];

  constructor(private theme: NbThemeService, private userService: UserService) {
    this.userService.getUsers().subscribe((users: any) => {
      for (const curUser in users) {
        if (users.hasOwnProperty(curUser)) {
          if (users[curUser].position === 'mentor'
            || !!users[curUser].skills && users[curUser].skills.length > 0) {
            const category = users[curUser].skills[0].category;
            if (!this.catMap[category]) {
              this.catMap[category] = 1;
            } else {
              this.catMap[category] = this.catMap[category] + 1;
            }
          }
        }
      }
      for (const cat in this.catMap) {
        if (this.catMap.hasOwnProperty(cat)) {
          this.categories.push(cat);
          const thisData = {value: this.catMap[cat], name: cat};
          this.data.push(thisData);
        }
      }
    });
  }

  ngAfterViewInit() {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {

      const colors = config.variables;
      const echarts: any = config.variables.echarts;

      this.options = {
        backgroundColor: echarts.bg,
        color: [colors.warningLight, colors.infoLight, colors.dangerLight, colors.successLight, colors.primaryLight],
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)',
        },
        legend: {
          orient: 'vertical',
          left: 'left',
          data: this.categories,
          textStyle: {
            color: echarts.textColor,
          },
        },
        series: [
          {
            name: 'Categories',
            type: 'pie',
            radius: '80%',
            center: ['50%', '50%'],
            data: this.data,
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: echarts.itemHoverShadowColor,
              },
            },
            label: {
              normal: {
                textStyle: {
                  color: echarts.textColor,
                },
              },
            },
            labelLine: {
              normal: {
                lineStyle: {
                  color: echarts.axisLineColor,
                },
              },
            },
          },
        ],
      };
    });
  }

  ngOnDestroy(): void {
    if (!!this.themeSubscription) {
      if (!!this.themeSubscription) {
        this.themeSubscription.unsubscribe();
      }
    }
  }
}
