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
      patient_id : this.HospitalData.length + 1,
      patient_avatar: "149071.png",
      patient_name:Patient_Name,
      patient_surname:Patient_Surname,
      patient_age:Patient_Age,
      patient_gender:Patient_Gender,
      patient_address:Patient_Address,
      patient_cell_number:Patient_Cell_Number,
      patient_email:Patient_Email
    })
  }

  RemovePatient(patient) {
    let index = this.HospitalData.indexOf(patient);
    this.HospitalData.splice(index,1);
  }

  Patients() {
    return this.HospitalData;
  }

  ShowPatient(name) {
    let index = this.HospitalData.indexOf(name);
    this.Show_Patient.splice(0,1);
    this.Show_Patient.push({
      patient_id:this.HospitalData[index].patient_id,
      patient_avatar: "149071.png",
      patient_name:this.HospitalData[index].patient_name,
      patient_surname:this.HospitalData[index].patient_surname,
      patient_age:this.HospitalData[index].patient_age,
      patient_gender:this.HospitalData[index].patient_gender,
      patient_address:this.HospitalData[index].patient_address,
      patient_cell_number:this.HospitalData[index].patient_cell_number,
      patient_email:this.HospitalData[index].patient_email
    });
      
  }

  ListPatients() {
    return this.Show_Patient;
  }
}
