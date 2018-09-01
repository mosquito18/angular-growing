import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatEnterpriseComponent } from './creat-enterprise.component';

describe('CreatEnterpriseComponent', () => {
  let component: CreatEnterpriseComponent;
  let fixture: ComponentFixture<CreatEnterpriseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatEnterpriseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatEnterpriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
