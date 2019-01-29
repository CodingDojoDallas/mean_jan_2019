import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexwritersComponent } from './indexwriters.component';

describe('IndexwritersComponent', () => {
  let component: IndexwritersComponent;
  let fixture: ComponentFixture<IndexwritersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexwritersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexwritersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
