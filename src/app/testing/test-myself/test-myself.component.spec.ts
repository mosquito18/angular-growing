import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestMyselfComponent } from './test-myself.component';

describe('TestMyselfComponent', () => {
  let component: TestMyselfComponent;
  let fixture: ComponentFixture<TestMyselfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestMyselfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestMyselfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
