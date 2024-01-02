import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchTransactionByAmountComponent } from './search-transaction-by-amount.component';

describe('SearchTransactionByAmountComponent', () => {
  let component: SearchTransactionByAmountComponent;
  let fixture: ComponentFixture<SearchTransactionByAmountComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchTransactionByAmountComponent]
    });
    fixture = TestBed.createComponent(SearchTransactionByAmountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
