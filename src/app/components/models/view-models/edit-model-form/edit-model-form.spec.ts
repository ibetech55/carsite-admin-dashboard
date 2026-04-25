import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditModelForm } from './edit-model-form';

describe('EditModelForm', () => {
  let component: EditModelForm;
  let fixture: ComponentFixture<EditModelForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditModelForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditModelForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
