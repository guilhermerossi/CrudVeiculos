import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCancelConfirmationComponent } from './dialog-cancel-confirmation.component';

describe('DialogCancelConfirmationComponent', () => {
  let component: DialogCancelConfirmationComponent;
  let fixture: ComponentFixture<DialogCancelConfirmationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogCancelConfirmationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogCancelConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
