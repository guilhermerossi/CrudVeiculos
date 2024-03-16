import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { VehicleService } from '../../services/vehicle.service';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { DialogVehicleSuccessComponent } from '../modals/dialog-vehicle-success/dialog-vehicle-success.component';
import { MatDialog } from '@angular/material/dialog';
import { DialogVehicleNotFoundComponent } from '../modals/dialog-vehicle-not-found/dialog-vehicle-not-found.component';
import { DialogCancelConfirmationComponent } from '../modals/dialog-cancel-confirmation/dialog-cancel-confirmation.component';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-vehicle-edit',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatSelectModule,
    CommonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './vehicle-edit.component.html',
  styleUrl: './vehicle-edit.component.scss',
})
export class VehicleEditComponent implements OnInit {
  editForm!: FormGroup;
  vehicleId!: number;
  brands: any[] = [
    { value: 'Chevrolet', viewValue: 'Chevrolet' },
    { value: 'Fiat', viewValue: 'Fiat' },
    { value: 'Volskwagen', viewValue: 'Volskwagen' },
    { value: 'Hyundai', viewValue: 'Hyundai' },
    { value: 'Toyota', viewValue: 'Toyota' },
    { value: 'Jeep', viewValue: 'Jeep' },
    { value: 'Renault', viewValue: 'Renault' },
    { value: 'Honda', viewValue: 'Honda' },
  ];

  constructor(
    private fb: FormBuilder,
    private vehicleService: VehicleService,
    private route: ActivatedRoute,
    private router: Router,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.vehicleId = +params['id'];
      const vehicle = this.vehicleService.getVehicleById(this.vehicleId);

      if (!vehicle) {
        this.openErrorDialog('0ms', '0ms');
        return;
      }

      this.editForm = this.fb.group({
        brand: [vehicle.brand, Validators.required],
        model: [vehicle.model, Validators.required],
        year: [vehicle.year, [Validators.required, Validators.maxLength(4)]],
        licensePlate: [vehicle.licensePlate, Validators.required],
        chassi: [vehicle.chassi, Validators.required],
        renavam: [vehicle.renavam, Validators.required],
      });
    });
  }

  onSubmit(): void {
    if (this.editForm.valid) {
      this.vehicleService.updateVehicle({
        id: this.vehicleId,
        ...this.editForm.value,
      });
      this.openSuccessDialog('0ms', '0ms');
      this.router.navigate(['/vehicles']);
    }
  }

  openSuccessDialog(
    enterAnimationDuration: string,
    exitAnimationDuration: string
  ): void {
    this.dialog.open(DialogVehicleSuccessComponent, {
      width: '350px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  openErrorDialog(
    enterAnimationDuration: string,
    exitAnimationDuration: string
  ): void {
    this.dialog.open(DialogVehicleNotFoundComponent, {
      width: '350px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  openCancelDialog(
    enterAnimationDuration: string,
    exitAnimationDuration: string
  ): void {
    this.dialog.open(DialogCancelConfirmationComponent, {
      width: '350px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
}
