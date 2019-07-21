  class Fighter {
  constructor(a) {
                  this._name = a.name,
                  this._damage = a.damage,
                  this._hp = a.hp,
                  this._agility = a.agility
              }

  getName() {return this._name};
  getDamage() {return this._damage};
  getAgility() {return this._agility};
  getHealth() {return this._hp};

  attack(opponent){
    let su = 101 - opponent.getAgility();
    let random = Math.floor(Math.random() * 100);
    if(random <= su){
      opponent._hp-=this._damage;
      return(' '+this._name+' make '+this._damage+' damang to '+opponent.getName()+' ')
    } else {
      return(' '+this._name+' attack missed ')
    }
  };

  heal(hp){
    this._hp = hp;
  };
  }

  function battle(fighter1, fighter2){
    while(true){
    let fagi1 = fighter1.attack(fighter2);
    let fagi2 = fighter2.attack(fighter1);
    let fhp1 = fighter1.getHealth();
    let fhp2 = fighter2.getHealth();
    if(fhp1<=0||fagi2<=0) break;
    console.log(fagi1);
    console.log(fagi2);
    }
  }


  const myFighter1 = new Fighter({ name: 'John', damage: 20, hp: 200, agility: 25 });
  const myFighter2 = new Fighter({ name: 'Jim', damage: 30, hp: 150, agility: 20 });

  battle(myFighter1, myFighter2);
