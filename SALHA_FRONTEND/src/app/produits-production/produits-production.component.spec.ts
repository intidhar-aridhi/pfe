import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitsProductionComponent } from './produits-production.component';

describe('ProduitsProductionComponent', () => {
  let component: ProduitsProductionComponent;
  let fixture: ComponentFixture<ProduitsProductionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProduitsProductionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProduitsProductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
