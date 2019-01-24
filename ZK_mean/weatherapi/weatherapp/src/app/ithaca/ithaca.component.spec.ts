import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IthacaComponent } from './ithaca.component';

describe('IthacaComponent', () => {
  let component: IthacaComponent;
  let fixture: ComponentFixture<IthacaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IthacaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IthacaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
