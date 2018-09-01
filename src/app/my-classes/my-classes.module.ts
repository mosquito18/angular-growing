import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdModule, NZ_LOCALE, enUS } from 'ng-zorro-antd';
import { MalihuScrollbarModule } from 'ngx-malihu-scrollbar';
import { MyClassesComponent } from './my-classes.component';
import {RouterModule} from '@angular/router';
import { RadarChatComponent } from './radar-chat/radar-chat.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { RecommendCardComponent } from './recommend-card/recommend-card.component';
import { ClassVedioArticleComponent } from './class-vedio-article/class-vedio-article.component';
@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
    NgxEchartsModule,
    ReactiveFormsModule,
    NgZorroAntdModule.forRoot(),
    MalihuScrollbarModule.forRoot(),
  ],
  entryComponents: [
    
  ],
  providers: [{ provide: NZ_LOCALE, useValue: enUS }],
  declarations: [
    MyClassesComponent,
    RadarChatComponent,
    RecommendCardComponent,
    ClassVedioArticleComponent,

  ]
})
export class MyClassesModule { }
