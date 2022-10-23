import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickCurrencyConvertComponent } from './quick-currency-convert.component';

describe('QuickCurrencyConvertComponent', () => {
  let component: QuickCurrencyConvertComponent;
  let fixture: ComponentFixture<QuickCurrencyConvertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuickCurrencyConvertComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuickCurrencyConvertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
