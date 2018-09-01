import { Component, OnInit,Input  } from '@angular/core';
import { DataService } from '../../shared/services/data.service';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.less']
})
export class CardComponent implements OnInit {
  @Input()isType: String;
  display=true;
  notDisplay=false;
  colors = ['pink', 'red', 'orange', 'green', 'cyan', 'blue', 'purple'];
  cards;
  vedios;
  constructor(private dataService: DataService) { }
  changeDisplay(){
    this.display=!this.display;
    this.notDisplay=!this.notDisplay;
  }
  ngOnInit() {
      this.dataService.getArticleList().subscribe(
        res => {
          this.cards = res;
        },
        error => { console.log(error) },
        () => { }
      );
      this.dataService.getVedioList().subscribe(
        res => {
          this.vedios = res;
        },
        error => { console.log(error) },
        () => { }
      );
  }

}
