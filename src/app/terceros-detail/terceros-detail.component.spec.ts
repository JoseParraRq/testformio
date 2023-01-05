import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TercerosDetailComponent } from './terceros-detail.component';

describe('TercerosDetailComponent', () => {
  let component: TercerosDetailComponent;
  let fixture: ComponentFixture<TercerosDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TercerosDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TercerosDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
