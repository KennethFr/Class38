class Game{
    constructor(){

    }
    getState(){
        var gameRef=database.ref('gameState')
        gameRef.on('value',(data)=>{
            gameState=data.val()
        })
    }
    update(state){
        database.ref('/').update({
            gameState:state
        })
    }
    async start(){
        if(gameState===0){
            player=new Player()
            var playerref=await database.ref('playerCount').once('value')
            if (playerref.exists()){
                playerCount=playerref.val()
                player.getCount()
            }
            form= new Form()
            form.display()
        }
        car1=createSprite(100,200)
        car2=createSprite(200,200)
        car3=createSprite(300,200)
        car4=createSprite(400,200)
        cars=[car1,car2,car3,car4]
    }
    play(){
        form.hide()
        textSize(30)
        Player.getPlayerInfo()
        if (allPlayers!==undefined){
            var position=100
            var x=0;
            var y=0;
            var index=0;
            for(var plr in allPlayers){
                index=index+1;
                x=x+200;
                y=displayHeight-allPlayers[plr].distance;
                cars[index-1].x=x
                cars[index-1].y=y
                if (plr==='player'+player.index){
                    cars[index-1].shapeColor="blue"
                    camera.position.x=displayWidth/2;
                    camera.position.y=cars[index-1].y
                    fill('red')
                }else{
                    fill('black')
                }
//                text (allPlayers[plr].name+ ':'+allPlayers[plr].distance,100,position)
//                position+=50
            }
        }
        if (keyIsDown(UP_ARROW)&& player.index!==null){
            player.distance+=30
            player.update()
        }
        drawSprites();
    }
}