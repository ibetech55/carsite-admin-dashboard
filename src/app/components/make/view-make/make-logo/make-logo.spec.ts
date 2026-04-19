import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeLogo } from './make-logo';

describe('MakeLogo', () => {
  let component: MakeLogo;
  let fixture: ComponentFixture<MakeLogo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MakeLogo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MakeLogo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
