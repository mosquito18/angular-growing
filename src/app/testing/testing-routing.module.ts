import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestingComponent } from './testing.component';
import { TestMyselfComponent } from './test-myself/test-myself.component';
import { TestEachComponent } from './test-each/test-each.component';
const testingRoutes: Routes = [
  {
    path: 'testing', component: TestingComponent,
    children: [
      { path: 'testmyself', component: TestEachComponent },
      { path: 'testeach/:colleagueid', component: TestEachComponent },
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(testingRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class TestingRoutingModule { }
