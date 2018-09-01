import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-person-message',
  templateUrl: './person-message.component.html',
  styleUrls: ['./person-message.component.less']
})
export class PersonMessageComponent implements OnInit {
  isEdit=[];
  sex="男";
  birth="1987年10月24日";
  addr="浙江杭州";
  tel="18111112138";
  enterprise="XXX企业财务部门";
  nickname="林木木的木";
  constructor() { }
  edit(index) {
    this.isEdit[index]=!this.isEdit[index];
  }
  ngOnInit() {
    for(var i=0;i<5;i++){
      this.isEdit[i]=false;
    }
  }

}
