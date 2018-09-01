import { Component, OnInit } from '@angular/core';
import { flyIn } from '../animations/fly-in';
import { DataService } from '../shared/services/data.service';
@Component({
  selector: 'app-my-classes',
  templateUrl: './my-classes.component.html',
  styleUrls: ['./my-classes.component.less'],
  animations: [flyIn]
})
export class MyClassesComponent implements OnInit {
  cards;
  vedios;
  recommends;  
  constructor(private dataService: DataService) { }
  alldata = [9.6, 8.8, 7.0, 8.5, 9.0, 7.7];
  allcolor = 'rgba(167, 100, 249, 0.8)';
  alldata1 = [6.4, 9.8, 7.5, 5.0, 9.0, 4.4];
  allcolor1 = 'rgba(249, 160, 56, 0.8)';
  levels=[0,1,2]
  // tabs = [
  //   {
  //     index: 1,
  //     title:"程序员推荐"
  //   },
  //   {
  //     index: 2,
  //     title:"管理层推荐"
  //   },
  //   {
  //     index: 3,
  //     title:"销售层推荐"
  //   },
  //   {
  //     index: 3,
  //     title:"设计层推荐"
  //   }
  // ];
  ngOnInit() {
    this.dataService.getArticleList().subscribe(
      res => {
        this.cards = res;
        console.log(this.cards);
      },
      error => { console.log(error) },
      () => { }
    );
    this.dataService.getVedioList().subscribe(
      res => {
        this.vedios = res;
        console.log(this.vedios);
        
      },
      error => { console.log(error) },
      () => { }
    );
    this.dataService.getRecommendListURL().subscribe(
      res => {
        this.recommends = res;
        // console.log(this.recommends);
        
      },
      error => { console.log(error) },
      () => { }
    );
  }


}
