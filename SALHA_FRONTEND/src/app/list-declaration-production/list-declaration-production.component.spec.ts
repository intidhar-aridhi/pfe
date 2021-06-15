import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDeclarationProductionComponent } from './list-declaration-production.component';

describe('ListDeclarationProductionComponent', () => {
  let component: ListDeclarationProductionComponent;
  let fixture: ComponentFixture<ListDeclarationProductionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListDeclarationProductionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDeclarationProductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
