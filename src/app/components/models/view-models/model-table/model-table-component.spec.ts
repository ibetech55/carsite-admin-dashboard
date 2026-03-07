import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelTableComponent } from './model-table-component';

describe('ViewModelsTable', () => {
  let component: ModelTableComponent;
  let fixture: ComponentFixture<ModelTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModelTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModelTableComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
