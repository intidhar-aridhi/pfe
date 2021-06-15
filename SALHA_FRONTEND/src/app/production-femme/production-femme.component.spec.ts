import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductionFemmeComponent } from './production-femme.component';

describe('ProductionFemmeComponent', () => {
  let component: ProductionFemmeComponent;
  let fixture: ComponentFixture<ProductionFemmeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductionFemmeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductionFemmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
