import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookReadedComponent } from './book-readed.component';

describe('BookReadedComponent', () => {
  let component: BookReadedComponent;
  let fixture: ComponentFixture<BookReadedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookReadedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookReadedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
