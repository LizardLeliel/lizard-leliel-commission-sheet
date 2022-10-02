import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StyleCommissionInfoComponent } from './style-commission-info.component';

describe('StyleCommissionInfoComponent', () => {
  let component: StyleCommissionInfoComponent;
  let fixture: ComponentFixture<StyleCommissionInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StyleCommissionInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StyleCommissionInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
