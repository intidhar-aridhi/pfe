import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierAlimentationComponent } from './modifier-alimentation.component';

describe('ModifierAlimentationComponent', () => {
  let component: ModifierAlimentationComponent;
  let fixture: ComponentFixture<ModifierAlimentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierAlimentationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierAlimentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
