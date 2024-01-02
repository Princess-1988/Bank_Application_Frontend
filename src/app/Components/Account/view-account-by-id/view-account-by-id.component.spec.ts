import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAccountByIdComponent } from './view-account-by-id.component';

describe('ViewAccountByIdComponent', () => {
  let component: ViewAccountByIdComponent;
  let fixture: ComponentFixture<ViewAccountByIdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewAccountByIdComponent]
    });
    fixture = TestBed.createComponent(ViewAccountByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
