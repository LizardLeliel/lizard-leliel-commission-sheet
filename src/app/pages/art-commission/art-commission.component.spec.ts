import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtCommissionComponent } from './art-commission.component';

describe('ArtCommissionComponent', () => {
  let component: ArtCommissionComponent;
  let fixture: ComponentFixture<ArtCommissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtCommissionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtCommissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
