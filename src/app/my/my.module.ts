import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdModule, NZ_LOCALE, enUS } from 'ng-zorro-antd';
import { MyRoutingModule } from './my-routing.module';
import { MalihuScrollbarModule } from 'ngx-malihu-scrollbar';
import { MyComponent } from './my.component';
import { PersonMessageComponent } from './person-message/person-message.component';
import { LikeVedioComponent } from './like-vedio/like-vedio.component';
import { LikeArticleComponent } from './like-article/like-article.component';
import { CreateEnterpriseComponent } from './create-enterprise/create-enterprise.component';
import { MyEnterpriseComponent } from './my-enterprise/my-enterprise.component';
import { MyArticleComponent } from './my-article/my-article.component';
import { CollectionCardComponent } from './collection-card/collection-card.component';
import { CreatEnterpriseComponent } from './creat-enterprise/creat-enterprise.component';
import { CreatTeamComponent } from './creat-team/creat-team.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MyRoutingModule,
    NgZorroAntdModule.forRoot(),
    MalihuScrollbarModule.forRoot(),
  ],
  entryComponents: [
    CreatEnterpriseComponent,
    CreatTeamComponent,
  ],
  providers: [{ provide: NZ_LOCALE, useValue: enUS }],
  declarations: [
    MyComponent,
    PersonMessageComponent,
    LikeVedioComponent,
    LikeArticleComponent,
    CreateEnterpriseComponent,
    MyEnterpriseComponent,
    MyArticleComponent,
    CollectionCardComponent,
    CreatEnterpriseComponent,
    CreatTeamComponent,
  ]
})
export class MyModule { }
