import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators,FormControl,FormGroup} from '@angular/forms';
import { HospitalDataService } from '../hospital-data.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  RegisterForm;
  public Patients_Info = [];
  patientName;
  patientSurname;
  patientAge;
  patientGender;
  patientAddress;
  patientCell;
  patientEmail

  constructor(public formBuilder:FormBuilder,public hospitaldataService: HospitalDataService) {
    this.RegisterForm = formBuilder.group({
      patient_name : ["",[Validators.required]],
      patient_surname : ["",[Validators.required]],
      patient_age : ["",[Validators.required]],
      gender : ["",[Validators.required]],
      patient_address : ["",[Validators.required]],
      cell_number : ["",[Validators.required]],
      eMail : ["",[Validators.required]]
    })

    this.Patients_Info = this.hospitaldataService.Patients();

  }

  ngOnInit() {
  }

  AddPatients() {
    this.hospitaldataService.AddNewPatient(
      this.patientName,this.patientSurname,
      this.patientAge,this.patientGender,
      this.patientAddress,this.patientCell,
      this.patientEmail)
  }

  PatientInfo(patient) {
    this.hospitaldataService.ShowPatient(patient)
  }
}
