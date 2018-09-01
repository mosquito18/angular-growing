import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassVedioArticleComponent } from './class-vedio-article.component';

describe('ClassVedioArticleComponent', () => {
  let component: ClassVedioArticleComponent;
  let fixture: ComponentFixture<ClassVedioArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassVedioArticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassVedioArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
