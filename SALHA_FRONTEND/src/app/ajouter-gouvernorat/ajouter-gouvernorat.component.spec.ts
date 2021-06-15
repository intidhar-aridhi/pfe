import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterGouvernoratComponent } from './ajouter-gouvernorat.component';

describe('AjouterGouvernoratComponent', () => {
  let component: AjouterGouvernoratComponent;
  let fixture: ComponentFixture<AjouterGouvernoratComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterGouvernoratComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterGouvernoratComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
