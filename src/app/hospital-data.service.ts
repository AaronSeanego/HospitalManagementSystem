import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HospitalDataService {
  private HospitalData = [];
  private Show_Patient = [];
  constructor() {}

  AddNewPatient(Patient_Name,Patient_Surname,Patient_Age,Patient_Gender,Patient_Address,Patient_Cell_Number,Patient_Email) {
    this.HospitalData.push({
      patient_name:Patient_Name,
      patient_surname:Patient_Surname,
      patient_age:Patient_Age,
      patient_gender:Patient_Gender,
      patient_address:Patient_Address,
      patient_cell_number:Patient_Cell_Number,
      patient_email:Patient_Email
    })
  }

  Patients() {
    return this.HospitalData;
  }

  ShowPatient(name) {
    let index = this.HospitalData.indexOf(name);
    this.Show_Patient.push(index);
    return this.Show_Patient;
  }
}
