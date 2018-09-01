import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MessagesComponent } from './messages.component';
import { CommentsComponent } from './comments/comments.component';
import { LikesComponent } from './likes/likes.component';
import { AllInformComponent } from './all-inform/all-inform.component';
import { MissionInformComponent } from './mission-inform/mission-inform.component';
import { LetterInformComponent } from './letter-inform/letter-inform.component';
import { LetterDetailComponent } from './letter-detail/letter-detail.component';

const messagesRoutes: Routes = [
  {
    path: 'messages', component: MessagesComponent,
    children: [
      { path: 'allinform', component: AllInformComponent },
      { path: 'comments', component: CommentsComponent },
      { path: 'likes', component: LikesComponent },
      { path: 'missioninform', component: MissionInformComponent },
      { path: 'letterinform', component: LetterInformComponent },
      { path: 'letterinform/check/:letterid', component: LetterDetailComponent },      
    ]


    // path: 'detail/:repoType/:repoId/:projectId', component: DetailComponent,
    // resolve: {
    //   user: UserResolver,
    //   repo: RepoResolver
    // },
    // children: [
    //   { path: 'summary', component: SummaryComponent }
    // ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(messagesRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class MessagesRoutingModule { }
