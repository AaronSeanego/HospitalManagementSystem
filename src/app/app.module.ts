import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatButtonModule} from '@angular/material';
import { AdminComponent } from './admin/admin.component';
import { FormGroup,FormBuilder, ReactiveFormsModule,FormsModule,Validators} from '@angular/forms'
import { HospitalDataService} from './hospital-data.service';
import { PatientsComponent } from './patients/patients.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    PatientsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [HospitalDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
