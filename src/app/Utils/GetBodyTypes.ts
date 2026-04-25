import { ISelectOptions } from "../Interfaces/shared";

export class GetBodyTypes {
    public options: ISelectOptions[] = [];

    public static execute(): ISelectOptions[] {
        return [
            {
                label: "Coupe",
                value: "Coupe"
            },
            {
                label: "Sedan",
                value: "Sedan"
            },
            {
                label: "Minivan",
                value: "Minivan"
            },
            {
                label: "Truck",
                value: "Truck"
            },
            {
                label: "Sports",
                value: "Sports"
            },
            {
                label: "SUV",
                value: "SUV"
            },
            {
                label: "Crossover",
                value: "Crossover"
            },
            {
                label: "Cargo",
                value: "Cargo"
            },
            {
                label: "Convertible",
                value: "Convertible"
            }
        ].sort((a, b) => a.label.localeCompare(b.label))
    }
}