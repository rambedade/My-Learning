// To make a new Map, you can use the Map constructor:

new Map()

//A map can feel very similar to an object in JS.

// However, it doesn't have inheritance. No prototypes! 
// This makes it useful as a data storage.

let bestPlayers=new Map()

bestPlayers.set(1,"The Champion")
bestPlayers.set(2,"The Runner Up")
bestPlayers.set(3,"The Loser")

console.log(bestPlayers) // Map(3) { 1 => 'The Champion', 2 => 'The Runner Up', 3 => 'The Loser' }


bestPlayers.get(3) // 'The Loser'
