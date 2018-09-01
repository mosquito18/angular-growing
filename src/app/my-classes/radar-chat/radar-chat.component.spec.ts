import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RadarChatComponent } from './radar-chat.component';

describe('RadarChatComponent', () => {
  let component: RadarChatComponent;
  let fixture: ComponentFixture<RadarChatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RadarChatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadarChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
