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
    wood_harvester_added++;
    if (wood_harvester_added == 11) {
        wood_harvesters++;
        wood_harvester_added = 0;
        button.disabled = false;
        updateWoodProgressBar(wood_harvester_added);
        return wood_harvester_added;
    } else {
        updateWoodProgressBar(wood_harvester_added);
    }
}

function addStoneHarvester()
{
    button = document.getElementById("add_stone_harvester_button");
    button.disabled = true;
    stone_harvester_added++;
    if (stone_harvester_added == 11) {
        stone_harvesters++;
        stone_harvester_added = 0;
        button.disabled = false;
        updateStoneProgressBar(stone_harvester_added);
        return stone_harvester_added;
    } else {
        updateStoneProgressBar(stone_harvester_added);
    }
}

function processHarvesters()
{
    if (wood_harvester_added)
        addWoodHarvester();
    if (stone_harvester_added)
        addStoneHarvester();

    var wood_value = parseInt(document.getElementById('wood-count').value, 10);
    wood_value = isNaN(wood_value) ? 0 : wood_value;
    wood_value += wood_harvesters;
    document.getElementById('wood-count').value = wood_value;

    var stone_value = parseInt(document.getElementById('stone-count').value, 10);
    stone_value = isNaN(stone_value) ? 0 : stone_value;
    stone_value += stone_harvesters;
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