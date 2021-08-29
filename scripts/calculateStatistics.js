function calculateStatistics(){
    var weapon_damage = document.getElementById("player_weapon");

    var player_damage = document.getElementById("statistic_dmg").innerHTML;
    player_damage.split('-');
    document.getElementById("statistic_dmg").innerHTML=player_damage[0]+"-"+player_damage[2];

    if(weapon_damage.hasChildNodes){
        if(weapon_damage.appendChild.src == "images/sword1.png"){
        }
    }
}