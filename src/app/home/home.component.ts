import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { fadeIn } from '../animations/fade-in';
import { DataService } from '../shared/services/data.service';
import { tabs, titles } from '../common/util';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less'],
  animations: [fadeIn]

})
export class HomeComponent implements OnInit {
  cards;
  vedios;
  _value = '';
  public scrollbarOptions = { axis: 'y', theme: 'minimal-dark' };
  @ViewChild("scrollMe")
  scrollMe: ElementRef;
  tabs=tabs;
  titles=titles;
  
  // 获取元素
  // public myScrollContainer: ElementRef;
  
  constructor(private dataService: DataService) { }

  changeStr(str) {
    var l = str.length;
    if (l > 31) {
      str = str.slice(0, 30) + '...'
    }
    return str;
  }
  changeTitle(str) {
    var l = str.length;
    if (l > 12) {
      str = str.slice(0,10) + '...'
    }
    return str;
  }
  ngOnInit() {
    this.dataService.getArticleList().subscribe(
      res => {
        this.cards = res;
        for (var i = 0; i < this.cards.length; i++) {
          this.cards[i].title = this.changeTitle(this.cards[i].title);      
          this.cards[i].content = this.changeStr(this.cards[i].content);
        }
      },
      error => { console.log(error) },
      () => { }
    );
    this.dataService.getVedioList().subscribe(
      res => {
        this.vedios = res;
        for (var i = 0; i < this.vedios.length; i++) {
          this.vedios[i].title = this.changeTitle(this.vedios[i].title);      
          this.vedios[i].content = this.changeStr(this.vedios[i].content);
        }
      },
      error => { console.log(error) },
      () => { }
    );
  }

}
