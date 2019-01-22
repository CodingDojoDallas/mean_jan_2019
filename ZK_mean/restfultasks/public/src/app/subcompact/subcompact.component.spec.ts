import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubcompactComponent } from './subcompact.component';

describe('SubcompactComponent', () => {
  let component: SubcompactComponent;
  let fixture: ComponentFixture<SubcompactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubcompactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubcompactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
