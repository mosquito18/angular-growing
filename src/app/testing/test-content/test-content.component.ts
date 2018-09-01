import { Component, OnInit } from '@angular/core';
import { DataService } from '../../shared/services/data.service';
import { Router} from '@angular/router';
import { NzModalSubject } from 'ng-zorro-antd';
@Component({
  selector: 'app-test-content',
  templateUrl: './test-content.component.html',
  styleUrls: ['./test-content.component.less']
})
export class TestContentComponent implements OnInit {
  testLen;
  num=0;
  constructor(
    private dataService: DataService,
    public router: Router,
    private subject: NzModalSubject
  ) {}

  tests;
  isChoose= new Array();
  choose(index,number){
    for(var i=0;i<4;i++){
      this.isChoose[index][i]=false;
    }
    this.isChoose[index][number]=true;
  }
  handleCancel(e) {
        for (var i = 0; i < this.testLen; i++) {
          for (var j = 0; j < 4; j++) {
            if(this.isChoose[i][j] == true){
              if(j==0){
                this.num+=10;
              }else if(j==1){
                this.num+=5;
              }else if(j==2){
                this.num+=3;
              }else{
                this.num+=1;
              }
            }   
          }
        }
        console.log(this.num);
    this.subject.destroy('onCancel');
  }
  ngOnInit() {
    this.dataService.addArtiicl().subscribe(
      res => {
        console.log(res);
        
      },
      error => { console.log(error) },
      () => { }
    );
    this.dataService.getTestList().subscribe(
      res => {
        this.tests = res;
        this.testLen = eval(this.tests).length;
        for (var i = 0; i < this.testLen; i++) {
          this.isChoose[i] = new Array();
          for (var j = 0; j < 4; j++) {
            this.isChoose[i][j] = false;
          }
        }
        // console.log(eval(this.tests).length);
      },
      error => { console.log(error) },
      () => { }
    );
  }

}
