import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportModels } from './import-models';

describe('ImportModels', () => {
  let component: ImportModels;
  let fixture: ComponentFixture<ImportModels>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImportModels]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImportModels);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
