import {Injectable} from "@angular/core";
import {Car} from "./car";

@Injectable()
export class DataService {

    public car : Car;

    public getValue() {
        return this.car;
    }

    public setValue(value:any) {
        this.car=value;
    }
    constructor() {
    }
}