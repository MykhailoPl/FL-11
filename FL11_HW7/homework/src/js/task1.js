
let login, password, passNew;
let user = 'user@gmail.com', admin = 'admin@gmail.com', passAdmin ='AdminPass', passUser = 'UserPass'; 
const SIX=6, FIVE=5;
login = prompt('email');
if(login===null||login===''){
  alert('Canceled');
} else if (login.length<SIX) {
  alert('I don\'t know any emails having name length less than 6 symbols');
} else if (login===user||login===admin){
  password = prompt('password');
  if(password===null||password===''){
    alert('Canceled');
  }else if(password===passAdmin&&login===admin){
    if(confirm('Do you want to change your password?')){
      if(prompt('enter old password')===passAdmin){
        passNew = prompt('enter new password')
        if(passNew.length<FIVE){
          alert('It’s too short password. Sorry.')
        }else {
          if(prompt('enter new password')===passNew){
            alert('You have successfully changed your password.');
            passAdmin = passNew;
          }else {
            alert('You wrote the wrong password.')
          }
        }
      }
    } else {
    alert('You have failed the change.')
    }
  }else if(password===passUser&&login===user){
    if(confirm('Do you want to change your password?')){
      if(prompt('enter old password')===passUser){
        passNew = prompt('enter new password')
        if(passNew.length<FIVE){
          alert('It’s too short password. Sorry.')
        }else {
          if(prompt('enter new password')===passNew){
            alert('You have successfully changed your password.');
            passUser = passNew;
          }else {
            alert('You wrote the wrong password.')
          }
        }
      }
    }else{
      alert('You have failed the change.')
    }
  }else{
    alert('Wrong password');
  }
}else{
  alert('I don’t know you');
}
