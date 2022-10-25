var wood_harvesters = 0;
var stone_harvesters = 0;

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
    wood_harvesters++;
}

function processHarvesters()
{
    var wood_value = parseInt(document.getElementById('wood-count').value, 10);
    wood_value = isNaN(wood_value) ? 0 : wood_value;
    wood_value += wood_harvesters;
    document.getElementById('wood-count').value = wood_value;

    var stone_value = parseInt(document.getElementById('stone-count').value, 10);
    stone_value = isNaN(stone_value) ? 0 : stone_value;
    stone_value += stone_harvesters;
    document.getElementById('stone-count').value = stone_value;
}

function addStoneHarvester()
{
    stone_harvesters++;
}
setInterval(function(){
    processHarvesters();
}, 1000);
