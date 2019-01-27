import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewwriterComponent } from './newwriter.component';

describe('NewwriterComponent', () => {
  let component: NewwriterComponent;
  let fixture: ComponentFixture<NewwriterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewwriterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewwriterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
