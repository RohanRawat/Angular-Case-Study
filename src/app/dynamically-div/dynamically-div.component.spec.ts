import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicallyDivComponent } from './dynamically-div.component';

describe('DynamicallyDivComponent', () => {
  let component: DynamicallyDivComponent;
  let fixture: ComponentFixture<DynamicallyDivComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicallyDivComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicallyDivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
