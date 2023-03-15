export class Invoice {
    constructor(client, detail, amount) {
        this.client = client;
        this.detail = detail;
        this.amount = amount;
        this.format = () => {
            return `${this.client} is own \$${this.amount} by ${this.detail}`;
        };
    }
}
