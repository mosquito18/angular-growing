import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdModule, NZ_LOCALE, enUS } from 'ng-zorro-antd';
import { MalihuScrollbarModule } from 'ngx-malihu-scrollbar';
import { WriteLetterComponent } from './write-letter.component';
import { EditLetterComponent } from './edit-letter/edit-letter.component';
@NgModule({
  imports: [
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
    WriteLetterComponent,
    EditLetterComponent
  ]
})
export class WriteLetterModule { }
