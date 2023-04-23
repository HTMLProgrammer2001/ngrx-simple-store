import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ViewBookListComponent} from './view-book-list.component';

describe('ViewBookListComponent', () => {
  let component: ViewBookListComponent;
  let fixture: ComponentFixture<ViewBookListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewBookListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewBookListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
