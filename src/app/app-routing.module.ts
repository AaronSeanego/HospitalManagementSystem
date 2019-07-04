import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { PatientsComponent } from './patients/patients.component';
import { AllPatientsComponent} from './all-patients/all-patients.component';
import {AppointmentsComponent} from './appointments/appointments.component';

const routes: Routes = [
  {path: "admin",component: AdminComponent},
  {path: "patients",component: PatientsComponent},
  {path: "all-patients",component: AllPatientsComponent},
  {path: "appointments",component:AppointmentsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
