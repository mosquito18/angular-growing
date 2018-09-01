import { Component, OnInit } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd';
import { CreatEnterpriseComponent } from '../creat-enterprise/creat-enterprise.component';
import { CreatTeamComponent } from '../creat-team/creat-team.component';
@Component({
  selector: 'app-my-enterprise',
  templateUrl: './my-enterprise.component.html',
  styleUrls: ['./my-enterprise.component.less']
})
export class MyEnterpriseComponent implements OnInit {
  enterprises=["团队名称1","巴拉巴拉巴拉","小萝卜小西红柿","x-code","团队名称5555","无限挑战","Angular2","running man"];
  constructor(private modalService: NzModalService) { }
showModalForComponent() {
    const subscription = this.modalService.open({
      width:650,
      content: CreatEnterpriseComponent,
      onOk() {
      },
      onCancel() {
        console.log('Click cancel');
      },
      footer: false,
      componentParams: {
        name: '测试渲染Component'
      }
    });
    subscription.subscribe(result => {
      console.log(result);
    })
  }
  showModalForComponent2() {
    const subscription = this.modalService.open({
      width:650,
      content: CreatTeamComponent,
      onOk() {
      },
      onCancel() {
        console.log('Click cancel');
      },
      footer: false,
      componentParams: {
        name: '测试渲染Component'
      }
    });
    subscription.subscribe(result => {
      console.log(result);
    })
  }
  ngOnInit() {
  }

}
