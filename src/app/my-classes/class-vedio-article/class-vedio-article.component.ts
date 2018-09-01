import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-class-vedio-article',
  templateUrl: './class-vedio-article.component.html',
  styleUrls: ['./class-vedio-article.component.less']
})
export class ClassVedioArticleComponent implements OnInit {
  @Input() datas = [];
  @Input() indexs;  
  data;
  display = [];
  notDisplay = [];
  colors = ['pink', 'red', 'orange', 'green', 'cyan', 'blue', 'purple'];
  changeDisplay(index) {
    this.display[index] = !this.display[index];
    this.notDisplay[index] = !this.notDisplay[index];
  }
  constructor() { }

  ngOnInit() {
    this.data = this.datas;
    for (var i = 0; i < 12; i++) {
      this.display[i] = true;
      this.notDisplay[i] = false;
    }
  }

}
