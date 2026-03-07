import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewModelsComponent } from './view-models-component';

describe('ViewModelsComponent', () => {
  let component: ViewModelsComponent;
  let fixture: ComponentFixture<ViewModelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewModelsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewModelsComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
