class Resource {
    constructor(amount = 0, harvester_count = 0, harvester_status = 0) {
        this.amount = amount;
        this.harvester_count = harvester_count;
        this.harvester_status = harvester_status;
    }

    addAmount(add_amount) {
        this.amount += add_amount;
    }
}

const Wood = new Resource();
const Stone = new Resource(); 

var wood_harvesters = 0;
var stone_harvesters = 0;
var stone_harvester_added = 0;
var wood_harvester_added = 0;

function harvestWood()
{
    var value = parseInt(document.getElementById('wood-count').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('wood-count').value = value;
}

function harvestStone()
{
    var value = parseInt(document.getElementById('stone-count').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('stone-count').value = value;
}

function addWoodHarvester()
{ 
    button = document.getElementById("add_wood_harvester_button");
    button.disabled = true;
    Wood.harvester_status++;
    if (Wood.harvester_status == 11) {
        Wood.harvester_count++;
        Wood.harvester_status = 0;
        button.disabled = false;
        updateWoodProgressBar(Wood.harvester_status);
    } else {
        updateWoodProgressBar(Wood.harvester_status);
    }
}

function addStoneHarvester()
{
    button = document.getElementById("add_stone_harvester_button");
    button.disabled = true;
    Stone.harvester_status++;
    if (Stone.harvester_status == 11) {
        Stone.harvester_count++;
        Stone.harvester_status = 0;
        button.disabled = false;
        updateStoneProgressBar(Stone.harvester_status);
    } else {
        updateStoneProgressBar(Stone.harvester_status);
    }
}

function processHarvesters()
{
    if (Wood.harvester_status)
        addWoodHarvester();
    if (Stone.harvester_status)
        addStoneHarvester();

    var wood_value = parseInt(document.getElementById('wood-count').value, 10);
    wood_value = isNaN(wood_value) ? 0 : wood_value;
    wood_value += Wood.harvester_count;
    document.getElementById('wood-count').value = wood_value;

    var stone_value = parseInt(document.getElementById('stone-count').value, 10);
    stone_value = isNaN(stone_value) ? 0 : stone_value;
    stone_value += Stone.harvester_count;
    document.getElementById('stone-count').value = stone_value;
}

setInterval(function(){
    processHarvesters();
}, 1000);

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