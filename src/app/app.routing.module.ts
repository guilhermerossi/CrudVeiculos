import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VehicleCreateComponent } from '../components/vehicle-create/vehicle-create.component';
import { VehicleEditComponent } from '../components/vehicle-edit/vehicle-edit.component';
import { VehicleListComponent } from '../components/vehicle-list/vehicle-list.component';

export const routes: Routes = [
  { path: '', redirectTo: '/vehicles', pathMatch: 'full' },
  { path: 'vehicles', component: VehicleListComponent },
  { path: 'vehicles/create', component: VehicleCreateComponent },
  { path: 'vehicles/:id/edit', component: VehicleEditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }