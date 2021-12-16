import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductRenderedComponent } from './product-rendered.component';

describe('ProductRenderedComponent', () => {
  let component: ProductRenderedComponent;
  let fixture: ComponentFixture<ProductRenderedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductRenderedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductRenderedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
