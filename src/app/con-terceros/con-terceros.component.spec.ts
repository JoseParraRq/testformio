import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConTercerosComponent } from './con-terceros.component';

describe('ConTercerosComponent', () => {
  let component: ConTercerosComponent;
  let fixture: ComponentFixture<ConTercerosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConTercerosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConTercerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
