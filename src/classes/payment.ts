import { Formatted } from "../interfaces/format.js";

export class Payment implements Formatted {
    constructor(public receipt: string, public detail: string, public amount: number) {
    }

    format = () => {
        return `${this.receipt} is owned \$${this.amount} by ${this.detail}`;
    };

}