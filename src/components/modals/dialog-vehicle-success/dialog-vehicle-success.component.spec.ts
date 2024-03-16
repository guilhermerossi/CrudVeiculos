import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogVehicleSuccessComponent } from './dialog-vehicle-success.component';

describe('DialogVehicleSuccessComponent', () => {
  let component: DialogVehicleSuccessComponent;
  let fixture: ComponentFixture<DialogVehicleSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogVehicleSuccessComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogVehicleSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
