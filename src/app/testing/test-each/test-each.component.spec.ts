import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestEachComponent } from './test-each.component';

describe('TestEachComponent', () => {
  let component: TestEachComponent;
  let fixture: ComponentFixture<TestEachComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestEachComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestEachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
