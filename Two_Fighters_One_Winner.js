/* 
  declare_winner(Fighter("Lew", 10, 2), Fighter("Harry", 5, 4), "Lew") => "Lew"
  
  Lew attacks Harry; Harry now has 3 health.
  Harry attacks Lew; Lew now has 6 health.
  Lew attacks Harry; Harry now has 1 health.
  Harry attacks Lew; Lew now has 2 health.
  Lew attacks Harry: Harry now has -1 health and is dead. Lew wins.
function Fighter(name, health, damagePerAttack) {
        this.name = name;
        this.health = health;
        this.damagePerAttack = damagePerAttack;
        this.toString = function() { return this.name; }
}
*/


function declareWinner(fighter1, fighter2, firstAttacker) {
    let first = null;
    let second = null;
    
    if (firstAttacker === fighter1.name) {
      first = fighter1;
      second = fighter2
    } else {
      first = fighter2;
      second = fighter1;
    }
    while (first.health >= 0 && second.health >= 0) {
      second.health -= first.damagePerAttack;
      if (second.health <= 0) {
        return first.name;
      }
      first.health -= second.damagePerAttack;
      if (first.health <= 0) {
        return second.name;
      }
    }  
  }