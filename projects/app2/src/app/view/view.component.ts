import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  val = 1;

  constructor() { 
    console.log('View constructor');
  }

  ngOnInit() {
    console.log('View on init hook');
  }

  add() {
    this.val++;
  }

  ngOnDestroy() {
    console.log('View on destroy hook')
  }

}
