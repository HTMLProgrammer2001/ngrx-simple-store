import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ViewCheckoutComponent} from './view-checkout.component';

describe('ViewCheckoutComponent', () => {
  let component: ViewCheckoutComponent;
  let fixture: ComponentFixture<ViewCheckoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewCheckoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewCheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
