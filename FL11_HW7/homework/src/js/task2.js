let prizBase=100, total=0, baseGuess=8, x=3, TWO=2, FOUR=4, ONE=1, ZERO=0, EIGTH=8, FIVESCORE=100;
let attempt, guess, prize, numeric;
if(confirm('Do you want to play a game')){
for(attempt=x;attempt;attempt--){
  if(attempt<x){
    prize=prize/TWO
    } else{
      prize=prizBase
    }
  guess = Math.floor(Math.random() * (baseGuess+ONE));
  numeric = +prompt('Choose a roulette from 0 to '+baseGuess+'\nAttempts left: '+attempt+
                    '\nTotal prize: '+total+'$\nPossible prize on current attempt: '+prize+'$');
  if(guess===numeric){
    total=total+prize;
    if(confirm('Congratulation, you won!   Your prize is: '+total+' $\nDo you want to continue?')){
      baseGuess=baseGuess+FOUR;
      attempt=FOUR;
      prizBase=prizBase*TWO;
      continue;
      } else{
        alert('Thank you for your participation. Your prize is: '+total+' $');
        if(confirm('Play once more?')){
          attempt=FOUR;
          prizBase=FIVESCORE;
          total=ZERO;
          baseGuess=EIGTH;
          continue;
          } else{
            break
          }
        }
    }
  if(attempt-ONE){
    continue
  }
  alert('Thank you for your participation. Your prize is: '+total+' $');
  if(confirm('граємо ще раз?')){
    attempt=FOUR;
    prizBase=FIVESCORE;
    total=ZERO;
    baseGuess=EIGTH;
    continue;
  } else{
    break
    }
  }
} else{
  alert('You did not become a billionaire, but can.')
}
