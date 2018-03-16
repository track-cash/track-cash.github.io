import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryInputComponent } from './cat-input.component';

describe('CatSelInputComponent', () => {
  let component: CategoryInputComponent;
  let fixture: ComponentFixture<CategoryInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
