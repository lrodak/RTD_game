function randomEnemy(){
    var enemy_HP = Math.floor(Math.random() * 200)+100;
    document.getElementById("enemy_statistic_hp").innerHTML = enemy_HP;
    document.getElementById("opponent_hp_label").innerHTML = enemy_HP+"/"+enemy_HP;
    var enemy_dmg = Math.floor(Math.random() * 5)+1;
    document.getElementById("enemy_statistic_dmg").innerHTML = enemy_dmg;
    var enemy_Armour = Math.floor(Math.random() * 2)+1;
    document.getElementById("enemy_statistic_armour").innerHTML = enemy_Armour;
    var critical_Chance = Math.floor(Math.random() * 2);
    document.getElementById("enemy_statistic_critical_chance").innerHTML = critical_Chance+"%";

    randomAvatar();
}