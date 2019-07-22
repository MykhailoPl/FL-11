class Fighter {
constructor(start) {
                this._name = start.name,
                this._damage = start.damage,
                this._hp = start.hp,
                this._agility = start.agility,
                this._win = 0,
                this._loss = 0,
                this.healing = start.hp
            }

getName() {
return this._name
}
getDamage() {
return this._damage
}
getAgility() {
return this._agility
}
getHealth() {
return this.healing
}

attack(opponent){
  let invers=101, a = 100;
  let su = invers - opponent.getAgility();
  let random = Math.floor(Math.random() * a);
  if(random <= su){
    opponent.dealDamage(this._damage);
    return' '+this._name+' make '+this._damage+' damang to '+opponent.getName()+' '
  } else {
    return' '+this._name+' attack missed '
  }
}
logCombatHistory(){
  return 'Name: '+this.getName()+', Wins: '+this._win+', Losses: '+this._loss+' '
}

heal(hp){
  hp>=this._hp?this.healing=this._hp:this.healing=hp;
}
dealDamage(bit){
  bit>=this.healing?this.healing=0:this.healing-=bit;
}
addWin(){
  this._win++
}
addLoss(){
  this._loss++
}
}

function battle(fighter1, fighter2){
  if(fighter1.healing && fighter2.healing){
    let TRUE = true;
  while(TRUE){
  let fagi1 = fighter1.attack(fighter2);
  let fagi2 = fighter2.attack(fighter1);
  let fhp1 = fighter1.healing;
  let fhp2 = fighter2.healing;
  if(!fhp1||!fhp2){
      if(fhp1){
        fighter2.addWin()
        fighter1.addLoss()
      } else{
        fighter1.addWin()
        fighter2.addLoss()
      }
    console.log(fighter1.logCombatHistory());
    console.log(fighter2.logCombatHistory());
    break;
  }
  console.log(fagi1);
  console.log(fagi2);
}
} else {
  fighter1.healing === 0 ? console.log(''+fighter1.getName()+" is dead and cant't fight.") : console.log(''
                                                        +fighter2.getName()+" is dead and cant't fight.");
}

}


const myFighter1 = new Fighter({ name: 'John', damage: 20, hp: 200, agility: 25 });
const myFighter2 = new Fighter({ name: 'Jim', damage: 30, hp: 150, agility: 20 });

battle(myFighter1, myFighter2);
