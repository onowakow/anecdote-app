import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnecdoteListComponent } from './anecdote-list.component';

describe('AnecdoteListComponent', () => {
  let component: AnecdoteListComponent;
  let fixture: ComponentFixture<AnecdoteListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnecdoteListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnecdoteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
