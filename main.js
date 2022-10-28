class Resource {
    constructor(amount_id, progbar, harvest_button_id, improvement_button_id, amount = 0, harvester_count = 0, harvest_strength = 1, harvester_status = 0, improvement_status = 0, build_cost = 10, improve_cost = 50) {
        this.amount = amount;
        this.harvester_count = harvester_count;
        this.harvest_strength = harvest_strength;
        this.harvester_status = harvester_status;
        this.improvement_status = improvement_status;
        this.amount_id = amount_id;
        this.progbar = progbar;
        this.harvest_button_id = harvest_button_id;
        this.improvement_button_id = improvement_button_id;
        this.build_cost = build_cost;
        this.improve_cost = improve_cost;
    }

    update() {
        if (this.harvester_status)
            this.addHarvester();
        if (this.improvement_status)
            this.improve();
        
        this.processHarvester();
        this,this.updateResourceValue(this.amount_id);
        this.enableButtons();
    }

    enableButtons() {
        var button = document.getElementById(this.harvest_button_id);

        if (this.harvester_status) {
            button.disabled = true;
            button.value = "Working...";
        } else if (this.improvement_status) {
            button.disabled = true;
            button.value = "Invest";
        } else if (this.build_cost > this.amount) {
            button.disabled = true;
        } else {
            button.disabled = false;
            button.value = "Invest";
        }

        button = document.getElementById(this.improvement_button_id);
        
        if (this.improvement_status) {
            button.disabled = true;
            button.value = "Improving...";
        } else if (this.harvester_status) {
            button.disabled = true;
            button.value = "Improve";
        } else if (this.improve_cost > this.amount) {
            button.disabled = true;
        } else {
            button.disabled = false;
            button.value = "Improve";
        }
    }
    
    updateProgressBar() {
        var element = document.getElementById(this.progbar);
        var width_increment = 10;
        
        if (this.harvester_status){
            var current_width = width_increment * this.harvester_status;
            element.style.width = current_width + '%';
        } else if (this.improvement_status) {
            var current_width = width_increment * this.improvement_status;
            element.style.width = current_width + '%';
        } else {
            element.style.width = 0 + '%';
        }
        
    }

    updateResourceValue(show_in_location) {
        document.getElementById(show_in_location).value = this.amount;
    }

    addAmount(add_amount) {
        this.amount += add_amount;
    }

    processHarvester() {
        this.addAmount(this.harvester_count*this.harvest_strength);
    }

    harvest() {
        this.addAmount(this.harvest_strength);
        let this_value = parseInt(document.getElementById(this.amount_id).value, 10);
        this_value += this.harvest_strength;
        document.getElementById(this.amount_id).value = this_value;
    }

    addHarvester() {
        if (!this.harvester_status){
            document.getElementById(this.harvest_button_id).disabled = true;
            document.getElementById(this.improvement_button_id).disabled = true;
            this.amount -= this.build_cost;
        }
        this.harvester_status++;

        if (this.harvester_status == 11) {
            this.harvester_count++;
            this.harvester_status = 0;
            this.updateProgressBar();
        } else {
            this.updateProgressBar();
        }
    }

    improve() {
        if (!this.improvement_status){
            document.getElementById(this.improvement_button_id).disabled = true;
            document.getElementById(this.harvest_button_id).disabled = true;
            this.amount -= this.improve_cost;
        }
        this.improvement_status++;

        if (this.improvement_status == 11) {
            this.harvest_strength++;
            this.improvement_status = 0;
            this.updateProgressBar();
        } else {
            this.updateProgressBar();
        }
    }
}

class DateTime {
    day_increment = (1/30);
    month_increment = (1/12);

    constructor(day = (1/30), month = (1/12), year = 0){
        this.day = day;
        this.month = month;
        this.year = year;
    }

    advanceTime(){
        this.day += this.day_increment;
        if (this.day >= (30/30)){
            this.day = this.day_increment;
            this.month += this.month_increment;
            if (this.month >= (12/12)){
                this.month = this.month_increment;
                this.year++;
            }
        }
    }

    getCurrentGameDate(){
        return (this.day*30).toFixed() + " / " + (this.month*12).toFixed() + " / " + this.year;
    }
}

const Datetime = new DateTime();

const Wood = new Resource("wood-count", "wood_progress_bar" ,"add_wood_harvester_button", "improve-wood");
const Stone = new Resource("stone-count", "stone_progress_bar", "add_stone_harvester_button", "improve-stone");

const Resources = [Wood, Stone];

setInterval(function(){
    updateResourceStates();
    updateDate();
}, 1000);

function updateResourceStates(){
    for (const element of Resources) {element.update();}}

function updateDate(){
    Datetime.advanceTime();
    document.getElementById("currentgamedate").textContent = Datetime.getCurrentGameDate();
}