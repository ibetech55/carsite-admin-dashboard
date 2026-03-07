import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeFilterComponent } from './make-filter-component';

describe('MakeFilterComponent', () => {
  let component: MakeFilterComponent;
  let fixture: ComponentFixture<MakeFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MakeFilterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MakeFilterComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
