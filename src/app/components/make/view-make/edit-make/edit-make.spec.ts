import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMake } from './edit-make';

describe('EditMake', () => {
  let component: EditMake;
  let fixture: ComponentFixture<EditMake>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditMake]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditMake);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
