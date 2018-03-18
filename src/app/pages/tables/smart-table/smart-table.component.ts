import { LocalDataSource, ViewCell } from 'ng2-smart-table';
import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { SmartTableService } from '../../../@core/data/smart-table.service';
import {UserService} from '../../../@core/data/users.service';


@Component({
  selector: 'ngx-button-view',
  template: `
    <button style="line-height: 0.5; margin: -5px; width: 150px;" [class]="renderValue === 'APPROVED' ?
     'btn btn-success' : 'btn btn-warning'"
      (click)="onClick()">{{ renderValue }}</button>
  `,
})
export class ButtonViewComponent implements ViewCell, OnInit {
  renderValue: string;

  @Input() value: string | number;
  @Input() rowData: any;

  @Output() save: EventEmitter<any> = new EventEmitter();

  ngOnInit() {
    this.renderValue = this.value.toString().toUpperCase();
  }

  onClick() {
    this.save.emit(this.rowData);
  }
}

@Component({
  selector: 'ngx-smart-table',
  templateUrl: './smart-table.component.html',
  styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
    }
  `],
})

export class SmartTableComponent {

  source: LocalDataSource = new LocalDataSource();
  settings;
  course: string;

  constructor(private service: SmartTableService, private userService: UserService) {
    const data = this.service.getData();
    this.source.load(data);

    this.settings = {
      actions: {
        columnTitle: 'Actions',
        add: true,
        edit: true,
        delete: true,
        custom: [],
        position: 'left', // left|right
      },
      add: {
        addButtonContent: '<i class="nb-plus"></i>',
        createButtonContent: '<i class="nb-checkmark"></i>',
        cancelButtonContent: '<i class="nb-close"></i>',
      },
      edit: {
        editButtonContent: '<i class="nb-edit"></i>',
        saveButtonContent: '<i class="nb-checkmark"></i>',
        cancelButtonContent: '<i class="nb-close"></i>',
      },
      delete: {
        deleteButtonContent: '<i class="nb-trash"></i>',
        confirmDelete: true,
      },
      approve: {
        deleteButtonContent: '<i class="ion-ionic"></i>',
        confirmDelete: true,
      },
      columns: {
        id: {
          title: 'Session ID',
          type: 'number',
        },
        category: {
          title: 'Category',
          type: 'string',
        },
        skill: {
          title: 'Skill',
          type: 'string',
        },
        mentor: {
          title: 'Mentor',
          type: 'string',
        },
        email: {
          title: 'Email',
          type: 'string',
        },
        status: {
          title: 'Status',
          type: 'custom',
          renderComponent: ButtonViewComponent,
          onComponentInitFunction: (instance) => {
            instance.save.subscribe(row => {
              let newStatus = 'unavailable';
              if (row.status === 'pending') {
                newStatus = 'approved';
              } else if (row.status === 'approved') {
                newStatus = 'pending';
              }
              row.status = newStatus;
              this.userService.updateUserSkillProperty(row.email, 'status', newStatus);
              this.settings.updated = true;
              this.source.load(data);
            });
          },
      },
      },
    };
  }

  itemClick(data) {
    this.course = '' + data.data.skill + ' ' + data.data.email;
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}
