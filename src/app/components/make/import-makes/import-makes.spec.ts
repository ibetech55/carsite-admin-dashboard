import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportMakes } from './import-makes';

describe('ImportMakes', () => {
  let component: ImportMakes;
  let fixture: ComponentFixture<ImportMakes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImportMakes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImportMakes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
