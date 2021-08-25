function randomEnemy(){
    var enemy_HP = Math.floor(Math.random() * 200);
    document.getElementById("enemy_statistic_hp").innerHTML = enemy_HP+100;
    var enemy_dmg = Math.floor(Math.random() * 10);
    document.getElementById("enemy_statistic_dmg").innerHTML = enemy_dmg+1;
    var enemy_Armour = Math.floor(Math.random() * 2);
    document.getElementById("enemy_statistic_armour").innerHTML = enemy_Armour+1;
    var critical_Chance = Math.floor(Math.random() * 2);
    document.getElementById("enemy_statistic_critical_chance").innerHTML = critical_Chance;
}