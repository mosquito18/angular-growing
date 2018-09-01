import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdModule, NZ_LOCALE, enUS } from 'ng-zorro-antd';
import { MessagesRoutingModule } from './messages-routing.module';
import { MessagesComponent } from './messages.component';
import { CommentsComponent } from './comments/comments.component';
import { LikesComponent } from './likes/likes.component';
import { MalihuScrollbarModule } from 'ngx-malihu-scrollbar';
import { AllInformComponent } from './all-inform/all-inform.component';
import { MissionInformComponent } from './mission-inform/mission-inform.component';
import { LetterInformComponent } from './letter-inform/letter-inform.component';
import { CommentCardComponent } from './comment-card/comment-card.component';
import { LikeCardComponent } from './like-card/like-card.component';
import { LetterCardComponent } from './letter-card/letter-card.component';
import { MissionCardComponent } from './mission-card/mission-card.component';
import { LetterDetailComponent } from './letter-detail/letter-detail.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MessagesRoutingModule,
    NgZorroAntdModule.forRoot(),
    MalihuScrollbarModule.forRoot(),
  ],
  entryComponents: [
    
  ],
  providers: [{ provide: NZ_LOCALE, useValue: enUS }],
  declarations: [
    MessagesComponent,
    CommentsComponent,
    LikesComponent,
    AllInformComponent,
    MissionInformComponent,
    LetterInformComponent,
    CommentCardComponent,
    LikeCardComponent,
    LetterCardComponent,
    MissionCardComponent,
    LetterDetailComponent
  ]
})
export class MessagesModule { }
