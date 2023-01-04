import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RcDashboardComponent } from './rc-dashboard.component';

describe('RcDashboardComponent', () => {
  let component: RcDashboardComponent;
  let fixture: ComponentFixture<RcDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RcDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RcDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
