import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatTeamComponent } from './creat-team.component';

describe('CreatTeamComponent', () => {
  let component: CreatTeamComponent;
  let fixture: ComponentFixture<CreatTeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatTeamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
