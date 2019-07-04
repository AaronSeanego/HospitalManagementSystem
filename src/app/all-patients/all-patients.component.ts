import { Component, OnInit } from '@angular/core';
import { HospitalDataService } from '../hospital-data.service';

@Component({
  selector: 'app-all-patients',
  templateUrl: './all-patients.component.html',
  styleUrls: ['./all-patients.component.css']
})
export class AllPatientsComponent implements OnInit {
  public All_Patients = [];
  Patient_ID;
  constructor(public all_patientsService:HospitalDataService) {
    this.All_Patients = this.all_patientsService.Patients();
  }

  ngOnInit() {
  }

  getID(allPatients) {
    this.Patient_ID = this.All_Patients[allPatients].patients_id;
    return this.Patient_ID;
  }
}
