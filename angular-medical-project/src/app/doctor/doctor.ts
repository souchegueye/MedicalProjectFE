export class Doctor {
  id: number;
  uname: string;
  pwd: string;
  specialization: string;
  name: string;
  fee: number;
  experience: number;
  gender: string;
  availableFrom: string;
  availableTo: string;

  constructor(
    id: number,
    uname: string,
    pwd: string,
    specialization: string,
    name: string,
    fee: number,
    experience: number,
    gender: string,
    availableFrom: string,
    availableTo: string
  ) {
    this.id = id;
    this.uname = uname;
    this.pwd = pwd;
    this.specialization = specialization;
    this.name = name;
    this.fee = fee;
    this.experience = experience;
    this.gender = gender;
    this.availableFrom = availableFrom;
    this.availableTo = availableTo;
  }
}
