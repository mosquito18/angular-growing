import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-write-letter',
  templateUrl: './write-letter.component.html',
  styleUrls: ['./write-letter.component.less']
})
export class WriteLetterComponent implements OnInit {
  isTest1 = false;
  isTest2 = false;
  isTest3 = false;
  isTest4 = false;
  constructor() { }

  ngOnInit() {
  }

}
