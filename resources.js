export class Resource {
    constructor(amount = 0, harvester_count = 0, harvester_status = 0) {
        this.amount = amount;
        this.harvester_count = harvester_count;
        this.harvester_status = harvester_status;
    }

    addAmount(add_amount) {
        this.amount += add_amount;
    }
}