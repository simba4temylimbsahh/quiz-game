class Game{
    constructor(){}
    gameState(){
        var gameRef = database.ref('gameState')
        gameRef.on("value", function(data){
            gameState = data.val()
        })
    }
    update(state){
        database.ref('/').update({
            gameState: state
        })
    }
    async start(){
        if(gameState===0){
            player = new Player()
            var playerCountRef = await database.ref('playerCount').once("value")
            if(playerCountRef.exists()){
                playerCount = playerCountRef.val()
                player.getCount()
            }
            form = new Form()
            form.display()
        }
    }
}

