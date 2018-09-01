import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { DataService } from '../shared/services/data.service';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { fadeIn } from '../animations/fade-in';
@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.less'],
  animations: [fadeIn]
})
export class ArticleDetailComponent implements OnInit, OnDestroy {
  cards = [];
  vedios = [];
  id;
  card = null;
  colors = ['pink', 'red', 'orange', 'green', 'cyan', 'blue', 'purple'];
  comments = [];
  long = "";
  routerEvent: any;
  constructor(
    private dataService: DataService,
    private router: Router,
    private route: ActivatedRoute) {
    this.routerEvent = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.getCard();
      }
    });
  }
  changeStr(str) {
    var l = str.length;
    if (l > 25) {
      str = str.slice(0, 24) + '...'
    }
    return str;
  }
  changeTitle(str) {
    var l = str.length;
    if (l > 12) {
      str = str.slice(0, 10) + '...'
    }
    return str;
  }
  show() {
    var newHeight = $(".box").height();
    var oldHeight = $(".wrap").height();
    console.log(newHeight + ":" + oldHeight);
    if (oldHeight == 400) {
      $(".wrap").height(newHeight + 20);
      $(".btns").hide();
      $(".btn_con").hide();
    }
  }
  longComment() {
    var strlong = $(".long_comment").text();
    var l = strlong.length;
    if (l > 100) {
      var str = strlong.slice(0, 99) + '...';
      $(".long_comment").text(str);
      var div1 = $("<div></div>").addClass("dis");
      div1.css({ display: "inline-block", color: "#58ba84", cursor: "pointer" });
      div1.bind("click", function () {
        $(".long_comment").text(strlong);
      });
      var i1 = $("<i></i>").addClass("fa fa-angle-double-down");
      i1.css({ fontSize: "18px", verticalAlign: "bottom" });
      var span1 = $("<span></span>").text("展开");
      div1.append(i1);
      div1.append(span1);
      $(".long_comment").append(div1);

    }
  }
  like() {
    if ($(".like").attr('src') == '../../assets/喜欢-暗.png') {
      $(".like").attr('src', '../../assets/喜欢-亮.png');
    } else {
      $(".like").attr('src', '../../assets/喜欢-暗.png');
    }
  }
  fabulous() {
    if ($(".fabulous").attr('src') == '../../assets/点赞-暗.png') {
      $(".fabulous").attr('src', '../../assets/点赞-亮.png');
      var num = parseInt($(".fabulous_num").text()) + 1;
      $(".fabulous_num").text(num);
    }
  }
  getCard() {
    this.id = this.route.snapshot.paramMap.get('articleId');
    this.dataService.getArticleList().subscribe(
      res => {
        for (var i = 0; i < res.length; i++) {
          if (res[i].id == this.id) {
            this.card = res[i];
            break;
          }
        }

      },
      error => { console.log(error) },
      () => { }
    );
  }
  ngOnInit() {
    // location.pathname.split("/")[location.pathname.split("/").length - 1];
    this.getCard();
    this.dataService.getArticleList().subscribe(
      res => {
        // console.log(res);

        for (var i = 0; i < 5; i++) {
          this.cards[i] = res[i];
          this.cards[i].title = this.changeTitle(this.cards[i].title);
          this.cards[i].content = this.changeStr(this.cards[i].content);
        }
      },
      error => { console.log(error) },
      () => { }
    );
    this.dataService.getVedioList().subscribe(
      res => {
        for (var i = 0; i < 5; i++) {
          this.vedios[i] = res[i];
          this.vedios[i].title = this.changeTitle(this.vedios[i].title);
          this.vedios[i].content = this.changeStr(this.vedios[i].content);
        }
      },
      error => { console.log(error) },
      () => { }
    );
    this.longComment();

    // this.dataService.getCommentListURL().subscribe(
    //   res => {

    //     for (let i = 0; i < res.length; i++) {
    //       if (res[i].postId == this.id) {
    //         this.comments.push(res[i]);
    //       }
    //     }
    //     console.log(this.comments);
    //   },
    //   error => { console.log(error) },
    //   () => { }
    // );
  }
  ngAfterViewInit() {
    // if ($(".box").height() < 400) {
    //   $(".btns").hide();
    //   $(".btn_con").hide();
    // }
  }
  ngOnDestroy() {
    this.routerEvent.unsubscribe();
  }
}
