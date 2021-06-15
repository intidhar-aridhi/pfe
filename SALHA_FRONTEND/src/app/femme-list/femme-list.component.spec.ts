import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FemmeListComponent } from './femme-list.component';

describe('FemmeListComponent', () => {
  let component: FemmeListComponent;
  let fixture: ComponentFixture<FemmeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FemmeListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FemmeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
