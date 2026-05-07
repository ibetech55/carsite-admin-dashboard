import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportMakesComponent } from './import-makes-component';

describe('ImportMakesComponent', () => {
  let component: ImportMakesComponent;
  let fixture: ComponentFixture<ImportMakesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImportMakesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImportMakesComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
