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