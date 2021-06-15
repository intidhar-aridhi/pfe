import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFemmeComponent } from './create-femme.component';

describe('CreateFemmeComponent', () => {
  let component: CreateFemmeComponent;
  let fixture: ComponentFixture<CreateFemmeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateFemmeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateFemmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
