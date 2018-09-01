import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllInformComponent } from './all-inform.component';

describe('AllInformComponent', () => {
  let component: AllInformComponent;
  let fixture: ComponentFixture<AllInformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllInformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllInformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
