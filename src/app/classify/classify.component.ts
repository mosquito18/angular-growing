import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { DataService } from '../shared/services/data.service';
import { fadeIn } from '../animations/fade-in';
@Component({
  selector: 'app-classify',
  templateUrl: './classify.component.html',
  styleUrls: ['./classify.component.less'],
  animations: [fadeIn]
})
export class ClassifyComponent implements OnInit {
  contentType;
  cards = [];
  bodyStyle = { padding: 0 };
  colors = ['pink', 'red', 'orange', 'green', 'cyan', 'blue', 'purple'];
  routerPath = '';
  routerEvent: any;
  url = "/home";
  type = "全部";
  tag = "";
  vedios = [];
  articles = [];
  checkValue = "";
  records=["AngularJS、Angular 2的区别","1-第一节：1小时快速上手"];
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private dataService: DataService
  ) {
  }
  changeStr(str) {
    var l = str.length;
    if (l > 23) {
      str = str.slice(0, 22) + '...'
    }
    return str;
  }
  changeTitle(str) {
    var l = str.length;
    if (l > 10) {
      str = str.slice(0, 9) + '...'
    }
    return str;
  }
  hoverCard(content) {
    var e = event || window.event;
    var target = e.target || e.srcElement;
    $(target).find(".custom-con").text(content);
    $(target).find(".card_icon").css({ display: "inline-block" });
  }
  outCard() {
    var e = event || window.event;
    var target = e.target || e.srcElement;
    $(target).find(".custom-con").text("");
    $(target).find(".card_icon").css({ display: "none" });
  }
  delete(){
    this.records=[];
  }
  check(checkValue) {
    if(checkValue!=""){
      this.contentType=checkValue;
      this.records.push(checkValue);
    }
    this.cards = [];
    this.vedios = [];
    // console.log("111111"+checkValue);

    if (this.type == "视频") {
      this.dataService.getVedioList().subscribe(
        res => {
          for (var i = 0; i < res.length; i++) {
            this.vedios[i] = res[i];
            this.vedios[i].title = this.changeTitle(this.vedios[i].title);
            this.vedios[i].content = this.changeStr(this.vedios[i].content);
          }
          if (checkValue == "") {
            this.cards = this.vedios;
          } else {
            for (var i = 0; i < this.vedios.length; i++) {
              if (this.vedios[i].tab == checkValue) {
                this.cards.push(this.vedios[i]);
              }
            }
          }
        },
        error => { console.log(error) },
        () => { }
      );
    } else if (this.type == "文章") {
      this.dataService.getArticleList().subscribe(
        res => {
          for (var i = 0; i < res.length; i++) {
            this.vedios[i] = res[i];
            this.vedios[i].title = this.changeTitle(this.vedios[i].title);
            this.vedios[i].content = this.changeStr(this.vedios[i].content);
          }
          if (checkValue == "") {
            this.cards = this.vedios;
          } else {
            for (var i = 0; i < this.vedios.length; i++) {
              if (this.vedios[i].tab == checkValue) {
                this.cards.push(this.vedios[i]);
              }
            }
          }
        },
        error => { console.log(error) },
        () => { }
      );
    } else {
      this.dataService.getArticleList().subscribe(
        res => {
          // console.log(res);
          for (var i = 0; i < res.length; i++) {
            this.vedios.push(res[i]);
          }
        },
        error => { console.log(error) },
        () => { }
      );
      this.dataService.getVedioList().subscribe(
        res => {
          for (var i = 0; i < res.length; i++) {
            this.vedios.push(res[i]);
          }
          for (var i = 0; i < this.vedios.length; i++) {
            this.vedios[i].title = this.changeTitle(this.vedios[i].title);
            this.vedios[i].content = this.changeStr(this.vedios[i].content);
          }
          if (checkValue == "") {
            this.cards = this.vedios;
          } else {
            for (var i = 0; i < this.vedios.length; i++) {
              if (this.vedios[i].tab == checkValue) {
                this.cards.push(this.vedios[i]);
              }
            }
          }

        },
        error => { console.log(error) },
        () => { }
      );

    }
    // console.log(this.vedios);


  }
  onChangeType(val) {
    if (val == "视频") {
      this.type = "视频";
      // this.router.navigateByUrl('/home/vedio');
    } else if (val == "文章") {
      this.type = "文章";
      // this.router.navigateByUrl('/home/article');
    } else {
      this.type = "全部";
    }


  }
  getCard() {
    this.cards = [];
    this.contentType = this.route.snapshot.paramMap.get('contentType');
    if (this.contentType == "article") {
      this.dataService.getArticleList().subscribe(
        res => {
          // console.log(res);
          for (var i = 0; i < res.length; i++) {
            if (res[i].type == this.contentType) {
              this.cards.push(res[i]);
            }
          }
          for (var i = 0; i < this.cards.length; i++) {
            this.cards[i].title = this.changeTitle(this.cards[i].title);
            this.cards[i].content = this.changeStr(this.cards[i].content);
          }
        },
        error => { console.log(error) },
        () => { }
      );
    } else if (this.contentType == "vedio") {
      this.dataService.getVedioList().subscribe(
        res => {
          for (var i = 0; i < res.length; i++) {
            if (res[i].type == this.contentType) {
              this.cards.push(res[i]);
            }
          }
          for (var i = 0; i < this.cards.length; i++) {
            this.cards[i].title = this.changeTitle(this.cards[i].title);
            this.cards[i].content = this.changeStr(this.cards[i].content);
          }
          console.log(this.cards);
        },
        error => { console.log(error) },
        () => { }
      );
    } else {
      this.dataService.getArticleList().subscribe(
        res => {
          // console.log(res);
          for (var i = 0; i < res.length; i++) {
            if (res[i].tab == this.contentType) {
              this.cards.push(res[i]);
            }
          }
        },
        error => { console.log(error) },
        () => { }
      );
      this.dataService.getVedioList().subscribe(
        res => {
          for (var i = 0; i < res.length; i++) {
            if (res[i].tab == this.contentType) {
              this.cards.push(res[i]);
            }
          }
          for (var i = 0; i < this.cards.length; i++) {
            this.cards[i].title = this.changeTitle(this.cards[i].title);
            this.cards[i].content = this.changeStr(this.cards[i].content);
          }

        },
        error => { console.log(error) },
        () => { }
      );
    }

    console.log(this.cards);
  }
  ngOnInit() {
    this.getCard();
    var minh = document.documentElement.clientHeight - 60;
    $(".minHeight").css({ minHeight: minh });

  }
}
