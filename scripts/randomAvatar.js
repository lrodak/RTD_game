function randomAvatar(){
    var avatar = Math.floor(Math.random()*2)+1;
    var src="images/enemy1.png";
    if(avatar==1){
        document.getElementById("opponent_image_id").src =src;
    } else{
        document.getElementById("opponent_image_id").src =src;
    }
}