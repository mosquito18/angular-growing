import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyComponent } from './my.component';
import { PersonMessageComponent } from './person-message/person-message.component';
import { LikeVedioComponent } from './like-vedio/like-vedio.component';
import { LikeArticleComponent } from './like-article/like-article.component';
import { CreateEnterpriseComponent } from './create-enterprise/create-enterprise.component';
import { MyEnterpriseComponent } from './my-enterprise/my-enterprise.component';
import { MyArticleComponent } from './my-article/my-article.component';
const myRoutes: Routes = [
  {
    path: 'my', component: MyComponent,
    children: [
      { path: 'personmessage', component: PersonMessageComponent },
      { path: 'likevedio', component: LikeVedioComponent },
      { path: 'likearticle', component: LikeArticleComponent },
      { path: 'createenterprise', component: CreateEnterpriseComponent },
      { path: 'myenterprise', component: MyEnterpriseComponent },
      { path: 'myarticle', component: MyArticleComponent },
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(myRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class MyRoutingModule { }
