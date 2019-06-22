import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingitemNowComponent } from './bookingitem-now.component';

describe('BookingitemNowComponent', () => {
  let component: BookingitemNowComponent;
  let fixture: ComponentFixture<BookingitemNowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingitemNowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingitemNowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
