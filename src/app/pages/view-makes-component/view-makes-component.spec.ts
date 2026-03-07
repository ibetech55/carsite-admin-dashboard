import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMakesComponent } from './view-makes-component';

describe('ViewMakesComponent', () => {
  let component: ViewMakesComponent;
  let fixture: ComponentFixture<ViewMakesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewMakesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewMakesComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
