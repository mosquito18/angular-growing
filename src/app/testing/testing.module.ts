import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdModule, NZ_LOCALE, enUS } from 'ng-zorro-antd';
import { TestingRoutingModule } from './testing-routing.module';
import { MalihuScrollbarModule } from 'ngx-malihu-scrollbar';
import { TestingComponent } from './testing.component';
import { TestMyselfComponent } from './test-myself/test-myself.component';
import { TestEachComponent } from './test-each/test-each.component';
import { TestContentComponent } from './test-content/test-content.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TestingRoutingModule,
    NgZorroAntdModule.forRoot(),
    MalihuScrollbarModule.forRoot(),
  ],
  entryComponents: [
    TestContentComponent
  ],
  providers: [{ provide: NZ_LOCALE, useValue: enUS }],
  declarations: [
    TestingComponent,
    TestMyselfComponent,
    TestEachComponent,
    TestContentComponent
  ]
})
export class TestingsModule { }
