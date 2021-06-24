import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterAlimentationComponent } from './ajouter-alimentation.component';

describe('AjouterAlimentationComponent', () => {
  let component: AjouterAlimentationComponent;
  let fixture: ComponentFixture<AjouterAlimentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterAlimentationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterAlimentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
