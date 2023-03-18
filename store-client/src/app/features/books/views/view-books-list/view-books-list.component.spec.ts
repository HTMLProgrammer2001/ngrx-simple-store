import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBooksListComponent } from './view-books-list.component';

describe('ViewHomeComponent', () => {
  let component: ViewBooksListComponent;
  let fixture: ComponentFixture<ViewBooksListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewBooksListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewBooksListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
