import { Injectable } from '@angular/core';
import { Vehicle } from '../models/vehicle.model';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  private vehicles: Vehicle[] = [];

  constructor() { }

  getVehicles(): Vehicle[] {
    return this.vehicles;
  }

  getVehicleById(id: number): Vehicle | undefined {
    return this.vehicles.find(vehicle => vehicle.id === id);
  }

  addVehicle(vehicle: Vehicle): void {
    vehicle.id = this.vehicles.length + 1;
    this.vehicles.push(vehicle);
  }

  updateVehicle(vehicle: Vehicle): void {
    const index = this.vehicles.findIndex(v => v.id === vehicle.id);
    if (index !== -1) {
      this.vehicles[index] = vehicle;
    }
  }

  deleteVehicle(id: number): void {
    this.vehicles = this.vehicles.filter(v => v.id !== id);
  }
}