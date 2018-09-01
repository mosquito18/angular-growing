import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdModule, NZ_LOCALE, enUS } from 'ng-zorro-antd';
import { CarouselComponent } from './carousel/carousel.component';
import { CardComponent } from './card/card.component';
import { VedioCardComponent } from './vedio-card/vedio-card.component';
import { MalihuScrollbarModule } from 'ngx-malihu-scrollbar';
import { ArticleCardComponent } from './article-card/article-card.component';
import { HomeComponent } from './home.component';
import {RouterModule} from '@angular/router';
@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgZorroAntdModule.forRoot(),
    MalihuScrollbarModule.forRoot(),
  ],
  entryComponents: [
    
  ],
  providers: [{ provide: NZ_LOCALE, useValue: enUS }],
  declarations: [
    HomeComponent,
    CardComponent,
    VedioCardComponent,
    CarouselComponent,
    ArticleCardComponent,

  ]
})
export class HomeModule { }
