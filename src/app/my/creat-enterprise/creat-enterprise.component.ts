import { Component, OnInit } from '@angular/core';
import { NzModalSubject } from 'ng-zorro-antd';
@Component({
  selector: 'app-creat-enterprise',
  templateUrl: './creat-enterprise.component.html',
  styleUrls: ['./creat-enterprise.component.less']
})
export class CreatEnterpriseComponent implements OnInit {

  constructor(private subject: NzModalSubject,) { }
  out(){
    this.subject.destroy('onCancel');
  }
  ngOnInit() {
  }

}
