// Soldier
class Soldier {
  constructor(health, strength){
    this.health = health
    this.strength = strength
  }

  attack() {
    return this.strength
  }

  receiveDamage(damage) {
    this.health -= damage
  }

}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength){
    super(health, strength)
    this.name = name
  }

  receiveDamage(damage){
    this.health -= damage
    if (this.health>0) return `${this.name} has received ${damage} points of damage`
    else return `${this.name} has died in act of combat`
  }

  battleCry(){
    return `Odin Owns You All!`
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    this.health -= damage
    if (this.health > 0) return `A Saxon has received ${damage} points of damage`
    else return "A Saxon has died in combat"
  }

}

// War
class War {

  constructor() {
    this.vikingArmy = []
    this.saxonArmy = []
  }

  addViking(newViking){
    this.vikingArmy.push(newViking)
  }

  addSaxon(newSaxon){
    this.saxonArmy.push(newSaxon)
  }

  vikingAttack(){
    let attackingViking = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)]
    let randomSaxonI = Math.floor(Math.random()*this.saxonArmy.length)
    let attackedSaxon = this.saxonArmy[randomSaxonI]

    if (attackedSaxon.health-attackingViking.strength <= 0) this.saxonArmy.splice(randomSaxonI,1)
    return attackedSaxon.receiveDamage(attackingViking.attack())
  }

  saxonAttack(){
    let attackingSaxon = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)]
    let randomVikingI = Math.floor(Math.random()*this.vikingArmy.length)
    let attackedViking = this.vikingArmy[randomVikingI]

    if (attackedViking.health-attackingSaxon.strength <= 0) this.vikingArmy.splice(randomVikingI,1)
    return attackedViking.receiveDamage(attackingSaxon.attack())
  }

  showStatus(){
    if (this.saxonArmy.length === 0) return "Vikings have won the war of the century!"
    else if (this.vikingArmy.length === 0) return "Saxons have fought for their lives and survived another day..."
    
    return "Vikings and Saxons are still in the thick of battle."
  }

}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
