import {Component, EventEmitter, Input, Output} from "@angular/core";
import {CarInterface} from "../cars/cars.component";

@Component({
    selector: "form-component",
    templateUrl: "./form-component.html",
    styleUrls: ["./form-component.css"]
})

export class FormComponent {
    public carName: string = "";
    public carYear: number = null;

    @Output() onAddCar: EventEmitter<CarInterface> = new EventEmitter<CarInterface>();


    public onClickAddCar() {
        this.onAddCar.emit({
           carName: this.carName,
           carYear: this.carYear
        });

        this.carName = "";
        this.carYear = null;
    }
}