import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTercerosComponent } from './update-terceros.component';

describe('UpdateTercerosComponent', () => {
  let component: UpdateTercerosComponent;
  let fixture: ComponentFixture<UpdateTercerosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateTercerosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateTercerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
