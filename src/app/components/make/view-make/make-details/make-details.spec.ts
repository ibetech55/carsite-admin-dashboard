import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeDetails } from './make-details';

describe('MakeDetails', () => {
  let component: MakeDetails;
  let fixture: ComponentFixture<MakeDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MakeDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MakeDetails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
