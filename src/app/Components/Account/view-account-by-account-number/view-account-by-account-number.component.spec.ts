import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAccountByAccountNumberComponent } from './view-account-by-account-number.component';

describe('ViewAccountByAccountNumberComponent', () => {
  let component: ViewAccountByAccountNumberComponent;
  let fixture: ComponentFixture<ViewAccountByAccountNumberComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewAccountByAccountNumberComponent]
    });
    fixture = TestBed.createComponent(ViewAccountByAccountNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
