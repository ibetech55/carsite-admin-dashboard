import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeTableComponent } from './make-table-component';

describe('MakeTableComponent', () => {
  let component: MakeTableComponent;
  let fixture: ComponentFixture<MakeTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MakeTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MakeTableComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
