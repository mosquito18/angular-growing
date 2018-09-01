import { Component, OnInit } from '@angular/core';
import { NzModalSubject } from 'ng-zorro-antd';
@Component({
  selector: 'app-creat-team',
  templateUrl: './creat-team.component.html',
  styleUrls: ['./creat-team.component.less']
})
export class CreatTeamComponent implements OnInit {
  tags = ["张艺兴", "CNBlue", "郑容和"];
  teams = ["颂恩·宋帕山", "普提查·克瑟辛", "披拉·尼迪裴善官", "李宗泫", "李正信", "姜敏赫"];
  visible: boolean;
  visible2: boolean;
  checkOptionsOne = [
    { label: 'Apple', value: 'Apple', checked: true },
    { label: 'Pear', value: 'Pear' },
    { label: 'Orange', value: 'Orange' }
  ];
  checkOptionsTwo = [
    { label: 'Apple', value: 'Apple', checked: true },
    { label: 'Pear', value: 'Pear' },
    { label: 'Orange', value: 'Orange' },
    { label: '张艺兴', value: '张艺兴' },
    { label: 'CNBlue', value: 'CNBlue', checked: true },
    { label: '郑容和', value: '郑容和' },
    { label: '李宗泫', value: '李宗泫' },
    { label: '李正信', value: '李正信' },
    { label: '姜敏赫', value: '姜敏赫', checked: true },
    { label: '颂恩·宋帕山', value: '颂恩·宋帕山', checked: true },
    { label: '普提查·克瑟辛', value: '普提查·克瑟辛' },
    { label: '披拉·尼迪裴善官', value: '披拉·尼迪裴善官' },
  ];
  constructor(private subject: NzModalSubject) { }
  clickMe() {
    this.visible = false;
  }
  clickMe2() {
    this.visible2 = false;
  }
  _log(value) {
    console.log(value);
  }
  out() {
    this.subject.destroy('onCancel');
  }

  ngOnInit() {
  }

}
