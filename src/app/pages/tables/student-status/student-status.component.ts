import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import { SmartTableService } from '../../../@core/data/smart-table.service';
import {NbSearchService} from '@nebular/theme';

@Component({
  selector: 'ngx-student-status',
  templateUrl: './student-status.component.html',
  styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
    }
  `],
})
export class StudentStatusComponent {

  settings = {
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
    columns: {
      id: {
        title: 'Session ID',
        type: 'number',
      },
      firstName: {
        title: 'Category',
        type: 'string',
      },
      lastName: {
        title: 'Skill',
        type: 'string',
      },
      username: {
        title: 'Mentor',
        type: 'string',
      },
      email: {
        title: 'Email',
        type: 'string',
      },
      age: {
        title: 'Mentor Grade',
        type: 'number',
      },
    },
  };
  search: string;
  source: LocalDataSource = new LocalDataSource();

  constructor(private service: SmartTableService,private searchService: NbSearchService ) {
    const data = this.service.getData();
    this.source.load(data);
    this.searchService.onSearchSubmit().subscribe(data => {
      console.log(data.term);
      this.search = data.term;
      this.handleSearch();
    })
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
  handleSearch(){

    console.log(event);

  }
  public  handleKeyUp(event: any) {
    console.log('Key press ' , event)
    if (event.keyCode === 13) {
     console.log('ENTER CLICKED');

    }

  }
}
