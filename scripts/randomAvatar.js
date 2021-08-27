function randomAvatar(){
    var avatar = Math.floor(Math.random()*2)+1;
    if(avatar==1){
        document.getElementById("opponent_image_id").src ="images/enemy1.png";
    } else{
        document.getElementById("opponent_image_id").src ="images/enemy2.png";
    }
}