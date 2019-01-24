import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CincinnatiComponent } from './cincinnati.component';

describe('CincinnatiComponent', () => {
  let component: CincinnatiComponent;
  let fixture: ComponentFixture<CincinnatiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CincinnatiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CincinnatiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
