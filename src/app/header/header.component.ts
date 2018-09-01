import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute, Router, ActivatedRouteSnapshot, RouterState, RouterStateSnapshot } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd';
import { LoginComponent } from '../login/login.component';
import { User } from '../user/model/user-model';
import { UserLoginService } from '../user/user-login/user-login.service';
import { UserRegisterService } from '../user/user-register/user-register.service';
import { NzMessageService } from 'ng-zorro-antd';
import { tabs } from '../common/util';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  _value = '';
  public currentUser: User;
  subscription: Subscription;
  visible: boolean;
  colors = ['pink', 'red', 'orange', 'green', 'cyan', 'blue', 'purple'];
  tabs = tabs;
  constructor(
    private modalService: NzModalService,
    public router: Router,
    public activatedRoute: ActivatedRoute,
    public userLoginService: UserLoginService,
    public userRegisterService: UserRegisterService,
    private _message: NzMessageService
  ) { }

  // console.log(location.pathname.split('/')[1]);
  // .merge(this.userRegisterService.currentUser)
  ngOnInit() {
    // this.currentUser = JSON.parse(localStorage.getItem("currentUser"));                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      "));
    console.log('第一次输出' + this.currentUser);
    this.userLoginService.currentUser.subscribe(
      data => {
        this.currentUser = data;
        console.log('第二次输出' + this.currentUser.userName);
        let activatedRouteSnapshot: ActivatedRouteSnapshot = this.activatedRoute.snapshot;
        let routerState: RouterState = this.router.routerState;
        let routerStateSnapshot: RouterStateSnapshot = routerState.snapshot;

        // console.log(activatedRouteSnapshot);
        // console.log(routerState);
        // console.log(routerStateSnapshot);

        //如果是从/login这个URL进行的登录，跳转到首页，否则什么都不做
        if (routerStateSnapshot.url.indexOf("/login") != -1) {
          this.router.navigateByUrl("/home");
        }
      },
      error => console.error(error)
    );
  }

  onSearch(): void {
    console.log(this._value);
  }
  public doLogout(): void {
    this.userLoginService.logout();
    this._message.info('退出成功');
    this.router.navigateByUrl("");
  }
  clickMe() {
    this.visible = false;
  }
  getTag(tab) {
    this._value=tab.label;
    this.visible = false;
  }
  showModalForComponent() {
    const subscription = this.modalService.open({
      width: 750,
      content: LoginComponent,
      onOk() {
      },
      onCancel() {
        console.log('Click cancel');
      },
      footer: false,
      componentParams: {
        name: '测试渲染Component'
      }
    });
    subscription.subscribe(result => {
      console.log(result);
    })
  }
}
