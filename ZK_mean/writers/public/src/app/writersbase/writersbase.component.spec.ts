import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WritersbaseComponent } from './writersbase.component';

describe('WritersbaseComponent', () => {
  let component: WritersbaseComponent;
  let fixture: ComponentFixture<WritersbaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WritersbaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WritersbaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
