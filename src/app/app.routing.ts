import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MyClassesComponent } from './my-classes/my-classes.component';
import { WriteComponent } from './write/write.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { ForgetPwdComponent } from './user/forget-pwd/forget-pwd.component';
import { UserRegisterComponent } from './user/user-register/user-register.component';
import { MyDailyComponent } from './my-daily/my-daily.component';
import { VedioPageComponent } from './vedio-page/vedio-page.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { ClassifyComponent } from './classify/classify.component';
import { MissionDetailComponent } from './mission-detail/mission-detail.component';
import { WriteLetterComponent } from './write-letter/write-letter.component';
export const routes: Routes = [
  {
    path: 'login',
    component: UserLoginComponent
  },
  {
    path: 'forgetpwd',
    component: ForgetPwdComponent
  },
  {
    path: 'register',
    component: UserRegisterComponent
  },
  {
    path: 'home',
    component:HomeComponent
  }, {
    path: 'home/articledetail/:articleTab/:articleId',
    component: ArticleDetailComponent
  },
  {
    path: 'home/videodetail/:videodeTab/:videodetail',
    component: VedioPageComponent
  },
  {
    path: 'home/:contentType',
    component: ClassifyComponent
  },
  { path: 'mydaily', component: MyDailyComponent },
  { path: 'mydaily/:missionName', component: MissionDetailComponent },  
  { path: 'myclasses', component: MyClassesComponent },
  
  { path: 'write', component: WriteComponent },
  {
    path: 'testing',
    loadChildren: './testing/testing.module#TestingsModule'
  },
  {
    path: 'messages',
    loadChildren: './messages/messages.module#MessagesModule'
  },
  {
    path: 'messages/letterinform/write',
    component: WriteLetterComponent
  },{
    path: 'messages/letterinform/write/:colleagueid',
    component: WriteLetterComponent
  },
  {
    path: 'my',
    loadChildren: './my/my.module#MyModule'
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  // { path: '**', component: PageNotFoundComponent }
];
export const routing = RouterModule.forRoot(
  routes,
  // {preloadingStrategy: SelectivePreloadingStrategy,useHash:true}
  { enableTracing: false } // <-- debugging purposes only
);
