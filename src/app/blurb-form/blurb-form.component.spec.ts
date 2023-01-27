import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlurbFormComponent } from './blurb-form.component';

describe('BlurbFormComponent', () => {
  let component: BlurbFormComponent;
  let fixture: ComponentFixture<BlurbFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlurbFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlurbFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
