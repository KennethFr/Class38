class Player{
constructor(){
this.name=null
this.distance=0
this.index=0
}
getCount(){
    var gameRef=database.ref('playerCount')
    gameRef.on('value',(data)=>{
        playerCount=data.val()
    })
}
updateCount(count){
    database.ref('/').update({
        playerCount:count
    })
}
update(){
    var playerIndex= "players/player"+this.index
    database.ref(playerIndex).set({
    name:this.name,
    distance:this.distance
    })
}
static getPlayerInfo(){
    var playerref=database.ref('players')
    playerref.on('value',(data)=>{
        allPlayers=data.val()
})
}
}