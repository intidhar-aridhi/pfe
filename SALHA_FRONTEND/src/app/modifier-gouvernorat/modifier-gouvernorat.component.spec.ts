import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierGouvernoratComponent } from './modifier-gouvernorat.component';

describe('ModifierGouvernoratComponent', () => {
  let component: ModifierGouvernoratComponent;
  let fixture: ComponentFixture<ModifierGouvernoratComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierGouvernoratComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierGouvernoratComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
