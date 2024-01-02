import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchTransactionByCustomerIdComponent } from './search-transaction-by-customer-id.component';

describe('SearchTransactionByCustomerIdComponent', () => {
  let component: SearchTransactionByCustomerIdComponent;
  let fixture: ComponentFixture<SearchTransactionByCustomerIdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchTransactionByCustomerIdComponent]
    });
    fixture = TestBed.createComponent(SearchTransactionByCustomerIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
