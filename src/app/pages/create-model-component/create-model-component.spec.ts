import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateModelComponent } from './create-model-component';

describe('CreateModelComponent', () => {
  let component: CreateModelComponent;
  let fixture: ComponentFixture<CreateModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateModelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateModelComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
