class Player{
    constructor(){
        this.index = null
        this.distance = 0
        this.name = null
        this.rank = null
    }
    getCount(){
        var countRef = database.ref('playerCount')
        countRef.on("value", function(data){
        playerCount = data.val()
        })
    }
    updateCount(count){
        database.ref('/').update({
            playerCount: count
        })
    }
    update(){
        var playerIndex = "players/player" + this.index
        database.ref(playerIndex).set({
            name: this.name,
            distance: this.distance
        })
    }
    static getPlayersInfo(){
        var infoRef = database.ref('players')
        infoRef.on("value", (data) =>{
            allPlayers = data.val()
        })
    }}