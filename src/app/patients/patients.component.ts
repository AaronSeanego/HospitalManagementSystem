import { Component, OnInit } from '@angular/core';
import { HospitalDataService } from '../hospital-data.service';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {
  public Patient_Data = [];
  public showPatient = [];
  constructor(public patientService:HospitalDataService) {
    this.Patient_Data = this.patientService.Patients();
  }

  ngOnInit() {
  }

  PatientInfo(patient) {
    this.showPatient = this.patientService.ShowPatient(patient);
  }
}