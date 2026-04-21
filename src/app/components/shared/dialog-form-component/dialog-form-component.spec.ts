import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogFormComponent } from './dialog-form-component';

describe('DialogFormComponent', () => {
  let component: DialogFormComponent;
  let fixture: ComponentFixture<DialogFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogFormComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
