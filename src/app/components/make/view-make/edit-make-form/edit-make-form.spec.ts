import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMakeForm } from './edit-make-form';

describe('EditMakeForm', () => {
  let component: EditMakeForm;
  let fixture: ComponentFixture<EditMakeForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditMakeForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditMakeForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
