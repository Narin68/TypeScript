import { Formatted } from "../interfaces/format.js";

export class Invoice implements Formatted {
    constructor(public client: string, public detail: string, public amount: number) {
    }

    format = () => {
        return `${this.client} is own \$${this.amount} by ${this.detail}`;
    };

}