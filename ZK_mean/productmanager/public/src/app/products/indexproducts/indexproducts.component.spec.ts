import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexproductsComponent } from './indexproducts.component';

describe('IndexproductsComponent', () => {
  let component: IndexproductsComponent;
  let fixture: ComponentFixture<IndexproductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexproductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
