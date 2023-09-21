export class User {
    id:number;
	gender:string;
    name:string;
    symptoms:string;
	age:number;
    mNum:string;
    email:string;
    pHistory:string;
    apptNum:number;
    date:string;
    setDate(inDate:string){
        this.date=inDate;
    }    
}
