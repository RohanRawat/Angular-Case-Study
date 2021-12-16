import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridOrRowViewOptionComponent } from './grid-or-row-view-option.component';

describe('GridOrRowViewOptionComponent', () => {
  let component: GridOrRowViewOptionComponent;
  let fixture: ComponentFixture<GridOrRowViewOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridOrRowViewOptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridOrRowViewOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
