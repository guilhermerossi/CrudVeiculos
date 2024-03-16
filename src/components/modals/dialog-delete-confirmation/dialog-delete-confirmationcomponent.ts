import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {
  MatDialogActions,
  MatDialogClose,
  MatDialogTitle,
  MatDialogContent,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { VehicleService } from '../../../services/vehicle.service';
import { DialogData } from '../../vehicle-list/vehicle-list.component';

@Component({
  selector: 'dialog-delete-confirmation',
  templateUrl: 'dialog-delete-confirmation.component.html',
  standalone: true,
  imports: [
    MatButtonModule,
    MatDialogActions,
    MatDialogClose,
    MatDialogTitle,
    MatDialogContent,
  ],
})
export class DialogDeleteConfirmationComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogDeleteConfirmationComponent>,
    private vehicleService: VehicleService,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}

  delete(): void {
    this.vehicleService.deleteVehicle(this.data.idVehicle);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
