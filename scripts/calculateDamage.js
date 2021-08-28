function calculateDamage(){
    var player_damage = document.getElementById("statistic_dmg").innerHTML;
    player_damage.split('-');

    var player_damage_diff=player_damage[2]-player_damage[0];

    var dmg= Math.floor(Math.random() * player_damage_diff) + parseInt(player_damage[0]);
    return dmg;
}