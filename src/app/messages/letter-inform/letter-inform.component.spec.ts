import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LetterInformComponent } from './letter-inform.component';

describe('LetterInformComponent', () => {
  let component: LetterInformComponent;
  let fixture: ComponentFixture<LetterInformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LetterInformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LetterInformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
