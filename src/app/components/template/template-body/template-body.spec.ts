import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateBody } from './template-body';

describe('TemplateBody', () => {
  let component: TemplateBody;
  let fixture: ComponentFixture<TemplateBody>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateBody]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateBody);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
