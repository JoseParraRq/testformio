import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterDetailFormComponent } from './master-detail-form.component';

describe('MasterDetailFormComponent', () => {
  let component: MasterDetailFormComponent;
  let fixture: ComponentFixture<MasterDetailFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasterDetailFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MasterDetailFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
