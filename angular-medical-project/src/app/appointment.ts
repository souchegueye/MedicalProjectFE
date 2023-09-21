export class Appointment {
    appointmentId:number;
    userId:number;
    doctorId:number;
    date:string;
    time:string;
    setDate(inDate:string):void{
        this.date=inDate;
    } 
}
