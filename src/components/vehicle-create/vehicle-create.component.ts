import { Component } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { VehicleService } from '../../services/vehicle.service';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { Router } from '@angular/router';
import { DialogCancelConfirmationComponent } from '../modals/dialog-cancel-confirmation/dialog-cancel-confirmation.component';
import { MatDialog } from '@angular/material/dialog';
import { DialogVehicleSuccessComponent } from '../modals/dialog-vehicle-success/dialog-vehicle-success.component';

@Component({
  selector: 'app-vehicle-create',
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
  templateUrl: './vehicle-create.component.html',
  styleUrl: './vehicle-create.component.scss',
})
export class VehicleCreateComponent {
  createForm!: FormGroup;
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
    private router: Router,
    public dialog: MatDialog
  ) {
    this.createForm = this.fb.group({
      brand: ['', Validators.required],
      model: ['', Validators.required],
      year: ['', [Validators.required, Validators.maxLength(4)]],
      licensePlate: ['', Validators.required],
      chassi: ['', Validators.required],
      renavam: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.createForm.valid) {
      this.vehicleService.addVehicle(this.createForm.value);
      this.openSuccessDialog('0ms', '0ms');
      this.router.navigate(['vehicles']);
    }
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
}
