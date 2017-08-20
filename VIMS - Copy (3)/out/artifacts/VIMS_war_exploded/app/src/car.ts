export class Car{


    vin:number;
    make:string = "";
    model:string = "";
   price:number;
    logo:string = "";
    qty:number;

	constructor(make: string, model: string, price:number,qty:number, logo: string) {
        this.make = make;
        this.model = model;
       this.price = price;
        this.logo = logo;
        this.qty=qty;
    }


}