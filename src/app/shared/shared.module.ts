/* Copyright © AngularDoc, Inc - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 */
import {
  NgModule,
  ModuleWithProviders
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { JsonpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { DataService } from './services/data.service'
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    JsonpModule
  ],
  entryComponents: [
    
  ],
  providers: [DataService],
  declarations: [
    FilterPipe
  ],
  exports: [
    CommonModule,
    FormsModule,
    FilterPipe
  ]
})
export class SharedModule { }
