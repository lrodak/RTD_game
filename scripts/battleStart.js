function battleStart(){
    var hp_label = document.getElementById("opponent_hp_label").innerHTML;
    var hp = hp_label.split('/');
    var damage = calculateDamage();
    hp[0]=hp[0]-damage;
    document.getElementById("opponent_hp_label").innerHTML = hp[0]+"/"+hp[1]

    if( hp[0]<=0){
        battleWin();
    }

    document.getElementsByClassName("information_dmg").style.display = block;
}