class Resource {
    constructor(amount_id, progbar, harvest_button_id, improvement_button_id, amount = 0, harvester_count = 0, harvest_strength = 1, harvester_status = 0, improvement_status = 0) {
        this.amount = amount;
        this.harvester_count = harvester_count;
        this.harvest_strength = harvest_strength;
        this.harvester_status = harvester_status;
        this.improvement_status = improvement_status;
        this.amount_id = amount_id;
        this.progbar = progbar;
        this.harvest_button_id = harvest_button_id;
        this.improvement_button_id = improvement_button_id;
    }

    enableButtons() {
        button = document.getElementById(this.harvest_button_id);
        button.disabled = false;
        button.value = "Invest";

        button = document.getElementById(this.improvement_button_id);
        button.disabled = false;
        button.value = "Improve";
    }
    
    updateProgressBar() {
        var element = document.getElementById(this.progbar);
        var width_increment = 10;

        switch(0) {
            case this.harvester_status:
                var current_width = width_increment * this.harvester_status;
                element.style.width = current_width + '%';
                break;
            case this.improvement_status:
                var current_width = width_increment * this.improvement_status;
                element.style.width = current_width + '%';
                break;
        }
        
    }

    updateResouceValue(show_in_location) {
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
        if(this.harvester_status == 0){
            document.getElementById(this.harvest_button_id).disabled = true;
            document.getElementById(this.improvement_button_id).disabled = true;
            document.getElementById(this.harvest_button_id).value = "Building..."
        }

        this.harvester_status++;

        if (this.harvester_status == 11) {
            this.harvester_count++;
            this.harvester_status = 0;
            this.enableButtons();
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
        return "Day: " + (this.day*30).toFixed() + " Month: " + (this.month*12).toFixed() + " Year: " + this.year;
    }
}

const Datetime = new DateTime();

const Wood = new Resource("wood-count", "wood_progress_bar" ,"add_wood_harvester_button", "improve-wood");
const Stone = new Resource("stone-count", "stone_progress_bar", "add_stone_harvester_button", "improve-stone");

function addWoodHarvester()
{
    if (Wood.harvester_status == 0)
        disableWoodButtonsForAddHarvester();
    Wood.harvester_status++;
    if (Wood.harvester_status == 11) {
        Wood.harvester_count++;
        Wood.harvester_status = 0;
        enableWoodButtons();
        updateWoodProgressBar(Wood.harvester_status);
    } else {
        updateWoodProgressBar(Wood.harvester_status);
    }
}

function addStoneHarvester()
{
    if (Stone.harvester_status == 0)
        disableStoneButtonsForAddHarvester();
    Stone.harvester_status++;
    if (Stone.harvester_status == 11) {
        Stone.harvester_count++;
        Stone.harvester_status = 0;
        enableStoneButtons();
        updateStoneProgressBar(Stone.harvester_status);
    } else {
        updateStoneProgressBar(Stone.harvester_status);
    }
}

function improveWood() 
{
    if (Wood.improvement_status == 0)
        disableWoodButtonsForImprovement();
    Wood.improvement_status++;
    if (Wood.improvement_status == 11) {
        Wood.harvest_strength++;
        Wood.improvement_status = 0;
        enableWoodButtons();
        updateWoodProgressBar(Wood.improvement_status);
    } else {
        updateWoodProgressBar(Wood.improvement_status);
    }
}

function improveStone() 
{
    if (Stone.improvement_status == 0)
        disableStoneButtonsForImprovement();
    Stone.improvement_status++;
    if (Stone.improvement_status == 11) {
        Stone.harvest_strength++;
        Stone.improvement_status = 0;
        enableStoneButtons();
        updateStoneProgressBar(Stone.improvement_status);
    } else {
        updateStoneProgressBar(Stone.improvement_status);
    }
}

function disableStoneButtonsForAddHarvester()
{
    document.getElementById("add_stone_harvester_button").disabled = true;
    document.getElementById("improve-stone").disabled = true;
    document.getElementById("add_stone_harvester_button").value = "Building...";
}

function disableWoodButtonsForAddHarvester()
{
    document.getElementById("add_wood_harvester_button").disabled = true;
    document.getElementById("improve-wood").disabled = true;
    document.getElementById("add_wood_harvester_button").value = "Building...";
}

function disableStoneButtonsForImprovement()
{
    document.getElementById("add_stone_harvester_button").disabled = true;
    document.getElementById("improve-stone").disabled = true;
    document.getElementById("improve-stone").value = "Improving...";
}

function disableWoodButtonsForImprovement()
{
    document.getElementById("add_wood_harvester_button").disabled = true;
    document.getElementById("improve-wood").disabled = true;
    document.getElementById("improve-wood").value = "Improving...";
}

function enableStoneButtons()
{
    harvester_button = document.getElementById("add_stone_harvester_button");
    harvester_button.disabled = false;
    harvester_button.value = "Invest";

    improve_button = document.getElementById("improve-stone");
    improve_button.disabled = false;
    improve_button.value = "Improve";
}

function enableWoodButtons()
{
    harvester_button = document.getElementById("add_wood_harvester_button");
    harvester_button.disabled = false;
    harvester_button.value = "Invest";

    improve_button = document.getElementById("improve-wood");
    improve_button.disabled = false;
    improve_button.value = "Improve";
}

function processHarvestersAndImprovements()
{
    if (Wood.harvester_status)
        Wood.addHarvester();
    if (Stone.harvester_status)
        Stone.addHarvester();
    if (Wood.improvement_status)
        improveWood();
    if (Stone.improvement_status)
        improveStone();

    Wood.processHarvester();
    Stone.processHarvester();
}



function updateWoodProgressBar(tracked_progress) {
    var element = document.getElementById("wood_progress_bar");
    var width_increment = 10;
    var current_width = width_increment * tracked_progress;
    element.style.width = current_width + '%';
}

function updateStoneProgressBar(tracked_progress) {
    var element = document.getElementById("stone_progress_bar");
    var width_increment = 10;
    var current_width = width_increment * tracked_progress;
    element.style.width = current_width+ '%';
}

function updateDate(){
    Datetime.advanceTime();
    document.getElementById("currentgamedate").textContent = Datetime.getCurrentGameDate();
}

function updateResourceValues() {
    Wood.updateResouceValue('wood-count');
    Stone.updateResouceValue('stone-count');
}

setInterval(function(){
    processHarvestersAndImprovements();
    updateResourceValues();
    updateDate();
}, 1000);