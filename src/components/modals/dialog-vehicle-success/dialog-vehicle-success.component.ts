import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {
  MatDialogActions,
  MatDialogClose,
  MatDialogTitle,
  MatDialogContent,
  MatDialogRef,
} from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'dialog-vehicle-success',
  templateUrl: 'dialog-vehicle-success.component.html',
  standalone: true,
  imports: [
    MatButtonModule,
    MatDialogActions,
    MatDialogClose,
    MatDialogTitle,
    MatDialogContent,
  ],
})
export class DialogVehicleSuccessComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogVehicleSuccessComponent>,
  ) {}

  closeDialog(): void {
    this.dialogRef.close();
  }
}
