import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMakeForm } from './create-make-form';

describe('CreateMakeForm', () => {
  let component: CreateMakeForm;
  let fixture: ComponentFixture<CreateMakeForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateMakeForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateMakeForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
