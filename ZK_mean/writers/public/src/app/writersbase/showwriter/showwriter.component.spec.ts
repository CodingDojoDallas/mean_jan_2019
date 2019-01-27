import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowwriterComponent } from './showwriter.component';

describe('ShowwriterComponent', () => {
  let component: ShowwriterComponent;
  let fixture: ComponentFixture<ShowwriterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowwriterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowwriterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
