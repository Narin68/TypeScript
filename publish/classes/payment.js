export class Payment {
    constructor(receipt, detail, amount) {
        this.receipt = receipt;
        this.detail = detail;
        this.amount = amount;
        this.format = () => {
            return `${this.receipt} is owned \$${this.amount} by ${this.detail}`;
        };
    }
}
