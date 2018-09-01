import { Component, OnInit } from '@angular/core';
import { fadeIn } from '../animations/fade-in';

@Component({
  selector: 'app-my',
  templateUrl: './my.component.html',
  styleUrls: ['./my.component.less'],
  animations: [fadeIn]
})
export class MyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
