import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeTableActionComponent } from './make-table-action-component';

describe('MakeTableActionComponent', () => {
  let component: MakeTableActionComponent;
  let fixture: ComponentFixture<MakeTableActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MakeTableActionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MakeTableActionComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
