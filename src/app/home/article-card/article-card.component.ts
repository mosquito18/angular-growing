import { Component, OnInit } from '@angular/core';
import { DataService } from '../../shared/services/data.service';

@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.less']
})
export class ArticleCardComponent implements OnInit {
  cards;
  constructor(private dataService: DataService) { }
  colors = ['pink', 'red', 'orange', 'green', 'cyan', 'blue', 'purple'];
  ngOnInit() {
      this.dataService.getArticleList().subscribe(
        res => {
          this.cards = res;
        },
        error => { console.log(error) },
        () => { }
      );
  }

}
