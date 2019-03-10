import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view1',
  templateUrl: './view1.component.html',
  styleUrls: ['./view1.component.css']
})
export class View1Component implements OnInit {

  val = 1;

  constructor() { 
    console.log('View 1 constructor');
  }

  ngOnInit() {
    console.log('View 1 on init hook');
  }

  add() {
    this.val++;
  }

  ngOnDestroy() {
    console.log('View 1 on destroy hook')
  }

}
