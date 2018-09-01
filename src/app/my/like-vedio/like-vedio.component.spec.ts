import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LikeVedioComponent } from './like-vedio.component';

describe('LikeVedioComponent', () => {
  let component: LikeVedioComponent;
  let fixture: ComponentFixture<LikeVedioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LikeVedioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LikeVedioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
