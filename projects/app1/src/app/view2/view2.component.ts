import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view2',
  templateUrl: './view2.component.html',
  styleUrls: ['./view2.component.css']
})
export class View2Component implements OnInit {

  constructor() {
    console.log('View 2 constructor');
  }

  ngOnInit() {
    console.log('View 2 on init hook');
  }

  ngOnDestroy() {
    console.log('View 2 on destroy hook');
  }

}
