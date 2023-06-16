import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductTechComponent } from './product-tech.component';

describe('ProductTechComponent', () => {
  let component: ProductTechComponent;
  let fixture: ComponentFixture<ProductTechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductTechComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductTechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
