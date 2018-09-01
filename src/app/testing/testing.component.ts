import { Component, OnInit, AfterViewInit } from '@angular/core';
import { fadeIn } from '../animations/fade-in';
@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.less'],
  animations: [fadeIn]
})
export class TestingComponent implements OnInit {
  isTest1 = true;
  isTest2 = false;
  isTest3 = false;
  isTest4 = false;

  constructor() {

  }
  ngOnInit() {

  }
  ngAfterViewInit() {
    // $('.testingMenu .active').parent().css('background-color','#deb30f');
  }
  isSelected(path){
    if(location.pathname === path){
      return true;
    }else{
      return false;
    }
  }
}