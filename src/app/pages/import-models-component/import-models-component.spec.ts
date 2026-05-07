import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportModelsComponent } from './import-models-component';

describe('ImportModelsComponent', () => {
  let component: ImportModelsComponent;
  let fixture: ComponentFixture<ImportModelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImportModelsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImportModelsComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
