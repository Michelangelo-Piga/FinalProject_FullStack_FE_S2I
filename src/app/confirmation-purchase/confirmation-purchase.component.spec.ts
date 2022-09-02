import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmationPurchaseComponent } from './confirmation-purchase.component';

describe('ConfirmationPurchaseComponent', () => {
  let component: ConfirmationPurchaseComponent;
  let fixture: ComponentFixture<ConfirmationPurchaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmationPurchaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmationPurchaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
