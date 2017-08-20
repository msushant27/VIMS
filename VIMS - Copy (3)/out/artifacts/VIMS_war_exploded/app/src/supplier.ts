export class Supplier{

    supplier_id:number;
    supplier_name:string = "";
    supplier_make:string = "";
    supplier_model:string = "";
    supplier_logo:string = "";
    supplier_price:number;

    constructor(supplier_id: number, supplier_name: string, supplier_make: string, supplier_model: string, supplier_logo: string, supplier_price: number){
        this.supplier_id = supplier_id;
        this.supplier_name = supplier_name;
        this.supplier_make = supplier_make;
        this.supplier_model = supplier_model;
        this.supplier_logo = supplier_logo;
        this.supplier_price= supplier_price;
    }
}