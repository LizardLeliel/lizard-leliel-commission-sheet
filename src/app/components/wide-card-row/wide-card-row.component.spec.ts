import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WideCardRowComponent } from './wide-card-row.component';

describe('WideCardRowComponent', () => {
  let component: WideCardRowComponent;
  let fixture: ComponentFixture<WideCardRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WideCardRowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WideCardRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
