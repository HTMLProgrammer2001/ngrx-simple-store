import {ComponentFixture, TestBed} from '@angular/core/testing';

import {BookDetailsReviewsComponent} from './book-details-reviews.component';

describe('BookDetailsReviewsComponent', () => {
  let component: BookDetailsReviewsComponent;
  let fixture: ComponentFixture<BookDetailsReviewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookDetailsReviewsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookDetailsReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
