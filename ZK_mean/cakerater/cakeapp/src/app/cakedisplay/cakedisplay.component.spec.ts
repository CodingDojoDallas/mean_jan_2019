import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CakedisplayComponent } from './cakedisplay.component';

describe('CakedisplayComponent', () => {
  let component: CakedisplayComponent;
  let fixture: ComponentFixture<CakedisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CakedisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CakedisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
