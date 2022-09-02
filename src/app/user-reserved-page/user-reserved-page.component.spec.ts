import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserReservedPageComponent } from './user-reserved-page.component';

describe('UserReservedPageComponent', () => {
  let component: UserReservedPageComponent;
  let fixture: ComponentFixture<UserReservedPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserReservedPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserReservedPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
