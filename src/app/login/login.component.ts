import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router, ActivatedRouteSnapshot, RouterState, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { NzModalSubject } from 'ng-zorro-antd';
import { UserLoginService } from '../user/user-login/user-login.service';
import { UserRegisterService } from '../user/user-register/user-register.service';
import { ForgetPwdService } from '../user/forget-pwd/forget-pwd.service';
import { User } from '../user/model/user-model';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  isForget = false;
  nzSelectedIndex = 0;
  public user: User = new User();
  public error: Error;
  public userForm: FormGroup;
  public userInfo: User = new User();
  public userForget: User = new User();
  public message: string;
  public messgeType: string;
  public formErrors = {
    'userName': '',
    'nickName': '',
    'email': '',
    'password': '',
    'confirmPassword': '',
    'formError': '',
    'vcode': ''
  };
  validationMessages = {
    'email': {
      'required': '邮箱必须输入。',
      'pattern': '请输入正确的邮箱地址。'
    },
    'password': {
      'required': '密码必须输入。',
      'minlength': '密码至少要8位。'
    },
    'vcode': {
      'required': '验证码必须输入。',
      'minlength': '4位验证码',
      'maxlength': '4位验证码'
    },
  };
  constructor(private fb: FormBuilder,
    public router: Router,
    public activatedRoute: ActivatedRoute,
    private subject: NzModalSubject,
    public userLoginService: UserLoginService,
    public userRegisterService: UserRegisterService,
    public forgetPwdService: ForgetPwdService
  ) {
    console.log(this.userLoginService);
  }
  isForgeted() {
    this.isForget = !this.isForget;
  }
  public sendValidationEmail(): void {
    this.forgetPwdService.sendValidationEmail(this.userForget.email)
      .subscribe(
      data => {
        this.message = data.message;
        this.messgeType = "success";
      },
      error => {
        this.message = error.messge;
        this.messgeType = "danger";
      }
      );
  }
  isChanged(nzSelectedIndex) {
    if (nzSelectedIndex) {
      $(".btn_r").addClass("logo_btn_r");
      $(".btn_l").removeClass("logo_btn_l");
      $(".btn_r").text("Register 注册");
      $(".btn_l").text("登录");

    } else {
      $(".btn_r").removeClass("logo_btn_r");
      $(".btn_l").addClass("logo_btn_l");
      $(".btn_r").text("注册");
      $(".btn_l").text("登录 Sign up");
    }
  }
  ngOnInit() {
    let activatedRouteSnapshot: ActivatedRouteSnapshot = this.activatedRoute.snapshot;
    let routerState: RouterState = this.router.routerState;
    let routerStateSnapshot: RouterStateSnapshot = routerState.snapshot;

    this.buildForm();
  }
  public doLogin(): void {
    console.log(this.user);
    this.userLoginService.login(this.user);
    this.subject.destroy('onCancel');
  }

  public doLogout(): void {
    this.userLoginService.logout();
    this.router.navigateByUrl("home");
  }

  // public forgetPwd(): void {
  //   this.router.navigateByUrl("forgetpwd");
  // }

  buildForm(): void {
    this.userForm = this.fb.group({
      "email": [
        this.userInfo.email,
        [
          Validators.required,
          Validators.pattern("^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$")
        ]
      ],
      "password": [
        this.userInfo.password,
        [
          Validators.required,
          Validators.minLength(8),
        ]
      ],
      "vcode": [
        this.userInfo.vcode,
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(4)
        ]
      ]
    });
    this.userForm.valueChanges
      .subscribe(data => this.onValueChanged(data));
    this.onValueChanged();
  }

  onValueChanged(data?: any) {
    if (!this.userForm) {
      return;
    }
    const form = this.userForm;
    for (const field in this.formErrors) {
      this.formErrors[field] = '';
      const control = form.get(field);
      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' ';
        }
      }
    }
  }

  doRegister() {
    if (this.userForm.valid) {
      this.userInfo = this.userForm.value;
      this.userInfo.userName = "123";
      this.userInfo.nickName = "123";
      this.userInfo.confirmPassword = "12345678";

      this.userRegisterService.register(this.userInfo)
        .subscribe(
        data => {
          this.router.navigateByUrl("home");
          this.subject.destroy('onCancel');

        },
        error => {
          this.formErrors.formError = error.message;
          console.error(error);
        }
        );
    } else {
      this.formErrors.formError = "存在不合法的输入项，请检查。";
    }
    console.log(this.userInfo);
  }

  testEmail() {
    let email = this.userForm.get("email").value;
    this.userRegisterService.testEmail(email)
      .subscribe(
      data => {
        console.log(data);
      },
      error => {
        console.error(error);
      }
      )
  }
}
