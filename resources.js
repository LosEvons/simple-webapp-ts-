export class Wood {
    constructor(amount, harvester_count, harvester_status) {
        this.amount = amount;
        this.harvester_count = harvester_count;
        this.harvester_status = harvester_status;
    }

    addWood(add_amount) {
        this.amount += add_amount;
    }
}