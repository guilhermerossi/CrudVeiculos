import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogVehicleNotFoundComponent } from './dialog-vehicle-not-found.component';

describe('DialogVehicleNotFoundComponent', () => {
  let component: DialogVehicleNotFoundComponent;
  let fixture: ComponentFixture<DialogVehicleNotFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogVehicleNotFoundComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogVehicleNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
