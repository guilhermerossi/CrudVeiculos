import { Component } from '@angular/core';
import { Vehicle } from '../../models/vehicle.model';
import { VehicleService } from '../../services/vehicle.service';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { DialogDeleteConfirmationComponent } from '../modals/dialog-delete-confirmation/dialog-delete-confirmationcomponent';
import { MatDialog } from '@angular/material/dialog';

export interface DialogData {
  idVehicle: number;
}

@Component({
  selector: 'app-vehicle-list',
  standalone: true,
  imports: [
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    CommonModule,
  ],
  templateUrl: './vehicle-list.component.html',
  styleUrl: './vehicle-list.component.scss',
})
export class VehicleListComponent {
  vehicles: Vehicle[] = [];
  displayedColumns: string[] = [
    'brand',
    'model',
    'year',
    'licensePlate',
    'chassi',
    'renavam',
    'actions',
  ];

  constructor(
    private vehicleService: VehicleService,
    private router: Router,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.vehicles = this.vehicleService.getVehicles();
  }

  editVehicle(id: number): void {
    this.router.navigate(['vehicles/' + id + '/edit']);
  }

  deleteVehicle(id: number): void {
    this.openDeleteDialog(id, '0ms', '0ms');
  }

  newVehicle(): void {
    this.router.navigate(['vehicles/create']);
  }

  openDeleteDialog(
    idVehicle: number,
    enterAnimationDuration: string,
    exitAnimationDuration: string
  ): void {
    const dialogRef = this.dialog.open(DialogDeleteConfirmationComponent, {
      data: { idVehicle: idVehicle },
      enterAnimationDuration,
      exitAnimationDuration,
    });

    dialogRef.afterClosed().subscribe(() => {
      this.vehicles = this.vehicleService.getVehicles();
    });
  }
}
