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
  selector: 'dialog-cancel-confirmation',
  templateUrl: 'dialog-cancel-confirmation.component.html',
  standalone: true,
  imports: [
    MatButtonModule,
    MatDialogActions,
    MatDialogClose,
    MatDialogTitle,
    MatDialogContent,
  ],
})
export class DialogCancelConfirmationComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogCancelConfirmationComponent>,
    private router: Router
  ) {}

  cancel(): void {
    this.router.navigate(['vehicles']);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
