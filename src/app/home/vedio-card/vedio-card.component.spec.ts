import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VedioCardComponent } from './vedio-card.component';

describe('VedioCardComponent', () => {
  let component: VedioCardComponent;
  let fixture: ComponentFixture<VedioCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VedioCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VedioCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
