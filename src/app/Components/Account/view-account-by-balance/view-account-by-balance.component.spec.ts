import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAccountByBalanceComponent } from './view-account-by-balance.component';

describe('ViewAccountByBalanceComponent', () => {
  let component: ViewAccountByBalanceComponent;
  let fixture: ComponentFixture<ViewAccountByBalanceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewAccountByBalanceComponent]
    });
    fixture = TestBed.createComponent(ViewAccountByBalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
