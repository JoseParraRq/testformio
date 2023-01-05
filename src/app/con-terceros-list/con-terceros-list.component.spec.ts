import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConTercerosListComponent } from './con-terceros-list.component';

describe('ConTercerosListComponent', () => {
  let component: ConTercerosListComponent;
  let fixture: ComponentFixture<ConTercerosListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConTercerosListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConTercerosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
