import { Component, OnInit } from '@angular/core';
import { fadeIn } from '../animations/fade-in';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.less'],
  animations: [fadeIn]
})
export class MessagesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
        console.log($('.active').parent());
    // $('.active').parent().css('background-color','#deb30f');
  }

}
