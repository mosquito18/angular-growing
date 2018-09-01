import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionInformComponent } from './mission-inform.component';

describe('MissionInformComponent', () => {
  let component: MissionInformComponent;
  let fixture: ComponentFixture<MissionInformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MissionInformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MissionInformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
