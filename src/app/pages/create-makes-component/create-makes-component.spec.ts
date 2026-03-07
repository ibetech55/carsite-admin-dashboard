import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMakesComponent } from './create-makes-component';

describe('CreateMakesComponent', () => {
  let component: CreateMakesComponent;
  let fixture: ComponentFixture<CreateMakesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateMakesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateMakesComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
