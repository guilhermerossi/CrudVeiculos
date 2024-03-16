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
  selector: 'dialog-vehicle-not-found',
  templateUrl: 'dialog-vehicle-not-found.component.html',
  standalone: true,
  imports: [
    MatButtonModule,
    MatDialogActions,
    MatDialogClose,
    MatDialogTitle,
    MatDialogContent,
  ],
})
export class DialogVehicleNotFoundComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogVehicleNotFoundComponent>,
    private router: Router
  ) {}

  closeDialog(): void {
    this.router.navigate(['vehicles']);
    this.dialogRef.close();
  }
}
