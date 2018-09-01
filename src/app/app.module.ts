import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MalihuScrollbarModule } from 'ngx-malihu-scrollbar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { routing } from './app.routing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VgCoreModule } from "videogular2/core";
import { VgControlsModule } from "videogular2/controls";
import { VgOverlayPlayModule } from "videogular2/overlay-play";
import { VgBufferingModule } from "videogular2/buffering";
import { CommonModule } from "@angular/common";
import { FroalaEditorModule, FroalaViewModule } from 'angular2-froala-wysiwyg';
import { NgxEchartsModule } from 'ngx-echarts';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { WriteComponent } from './write/write.component';
import { HomeModule } from './home/home.module';
import { MyClassesModule } from './my-classes/my-classes.module';
import { MessagesModule } from './messages/messages.module';
import { MyModule } from './my/my.module';
import { EditorModule } from '@tinymce/tinymce-angular';
import { SharedModule } from './shared/shared.module';
import { TestingsModule } from './testing/testing.module';
import { WriteLetterModule } from './write-letter/write-letter.module';
import { RouterModule } from '@angular/router';
import { UpStyleDirective } from './directive/up-style.directive';
import { VedioHoverDirective } from './directive/vedio-hover.directive';
import { HttpModule,JsonpModule} from '@angular/http';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { ForgetPwdComponent } from './user/forget-pwd/forget-pwd.component';
import { UserRegisterComponent } from './user/user-register/user-register.component';
import { UserLoginService } from './user/user-login/user-login.service';
import { UserRegisterService } from './user/user-register/user-register.service';
import { ForgetPwdService } from './user/forget-pwd/forget-pwd.service';
import { VedioPageComponent } from './vedio-page/vedio-page.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { VedioComponent } from './vedio/vedio.component';
import { ClassifyComponent } from './classify/classify.component';
import { MyDailyComponent } from './my-daily/my-daily.component';
import { MissionDetailComponent } from './mission-detail/mission-detail.component';
// import { QRCodeModule } from 'angular2-qrcode';
import { VedioCardComponent } from './vedio-card/vedio-card.component';
import {EqualValidator} from './user/user-register/directives/equal-validator.directive';
import {FormControlComponent} from './user/user-profile/dynamic-form/form-control.component';
import {UserProfileComponent} from './user/user-profile/user-profile.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    MyDailyComponent,
    UserLoginComponent,
    ForgetPwdComponent,
    UserRegisterComponent,
    HeaderComponent,
    LoginComponent,
    WriteComponent,
    UpStyleDirective,
    VedioHoverDirective,
    EqualValidator,
    VedioPageComponent,
    ArticleDetailComponent,
    VedioComponent,
    ClassifyComponent,
    VedioCardComponent,
    MissionDetailComponent,
    FormControlComponent,
    UserProfileComponent
  ],
  imports: [
    // QRCodeModule,
    RouterModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    EditorModule,
    WriteLetterModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    CommonModule,
    NgxEchartsModule,
    HomeModule,
    MyClassesModule,
    MessagesModule,
    MyModule,
    routing,
    HttpModule,
    JsonpModule,
    SharedModule,
    TestingsModule,
    NgZorroAntdModule.forRoot(),
    MalihuScrollbarModule.forRoot(),
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot()
  ],
  entryComponents: [LoginComponent],
  providers: [
    UserLoginService,
    UserRegisterService,
    ForgetPwdService,
    { provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
