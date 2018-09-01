import { Component, OnInit, AfterViewInit, Input, OnDestroy } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { DataService } from '../shared/services/data.service';
import { fadeIn } from '../animations/fade-in';
@Component({
  selector: 'app-vedio-page',
  templateUrl: './vedio-page.component.html',
  styleUrls: ['./vedio-page.component.less'],
  animations: [fadeIn]
})
export class VedioPageComponent implements OnInit {
  @Input() datas = [];
  display = [];
  notDisplay = [];
  colors = ['pink', 'red', 'orange', 'green', 'cyan', 'blue', 'purple'];
  private routerEvent: any;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private dataService: DataService
  ) {
    this.routerEvent = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.getCard();
      }
    });
  }
  id;
  vedio;
  vedios;
  comments = [];
  nzSelectedIndex = 0;
  isSelecteds = false;
  public scrollbarOptions = { axis: 'y', theme: 'minimal-dark' };
  public scrollbarX = { axis: 'x', theme: 'minimal-dark' };
  changeDisplay(index) {
    this.display[index] = !this.display[index];
    this.notDisplay[index] = !this.notDisplay[index];
  }
  changeStr(str) {
    var l = str.length;
    if (l > 31) {
      str = str.slice(0, 30) + '...'
    }
    return str;
  }
  isSelected(nzSelectedIndex) {
    // if(nzSelectedIndex==1){
    this.isSelecteds = !this.isSelecteds;
    // }
  }
  like() {
    if ($(".love").css("color") == "#fff" || $(".love").css("color") == "rgb(255, 255, 255)") {
      $(".love").css("color", "rgb(255, 0, 0)");
      var num = parseInt($(".love_num").text()) + 1;
      $(".love_num").text(num);
    } else {
      $(".love").css("color", "rgb(255,255, 255)");
      var num1 = parseInt($(".love_num").text()) - 1;
      $(".love_num").text(num1);
    }
  }
  whoComment(username) {
    $(".who").text("@" + username);
  }
  getCard() {
    this.id = location.pathname.split("/")[location.pathname.split("/").length - 1];

    this.dataService.getVedioList().subscribe(
      res => {
        this.vedios = res;
        for (let i = 0; i < res.length; i++) {
          this.vedios[i].content = this.changeStr(this.vedios[i].content);
          if (res[i].id == this.id) {
            this.vedio = res[i];
            break;
          }
        }
        console.log(this.vedio);
      },
      error => { console.log(error) },
      () => { }
    );
    this.dataService.getCommentListURL().subscribe(
      res => {

        for (let i = 0; i < res.length; i++) {
          if (res[i].postId == this.id) {
            this.comments.push(res[i]);
          }
        }
        console.log(this.comments);
      },
      error => { console.log(error) },
      () => { }
    );
    for (var i = 0; i < 5; i++) {
      this.display[i] = true;
      this.notDisplay[i] = false;
    }
  }
  ngOnInit() {
    // this.id = this.route.snapshot.queryParams['videodetail'];
    // this.id=this.route.snapshot.paramMap.get('videodetail');
    this.getCard();
    var minh = document.documentElement.clientHeight - 48;
    $(".minHeight").css({ minHeight: minh });
  }
  ngAfterViewInit() {
  }
  ngOnDestroy() {
    this.routerEvent.unsubscribe();
  }
}
