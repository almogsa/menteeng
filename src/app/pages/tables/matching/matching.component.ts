import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'matching',
  templateUrl: './matching.component.html',
  styleUrls: ['./matching.component.scss']
})
export class MatchingComponent implements OnInit {

  startMatching: boolean = false;
  title:string = 'Start matching !';

  constructor() { }

  ngOnInit() {
  }
  /*formatSubtitle = (percent: number) : string => {
    if(percent >= 100){
      return "Congratulations!"
    }else if(percent >= 50){
      return "Half"
    }else if(percent > 0){
      return "Just began"
    }else {
      return "Not started"
    }
  }*/
  startMatch() {
    this.startMatching = true;
    this.title = 'in progress ...';
  }
   /* formatSubtitle(percent: number)  {
    console.log(number)
    if(percent >= 100){
      return "Congratulations!"
    }else if(percent >= 50){
      return "Half"
    }else if(percent > 0){
      return "Just began"
    }else {
      return "Not started"
    }
  }*/
}
