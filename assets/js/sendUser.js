import { addUser } from "./firebase/users.js";


const btn = document.getElementById('btnForm');
const inputs = document.getElementsByTagName('input')
const genders = document.getElementsByClassName('gender')

function createUser(){
  let i = 0
  while(i < 6){
    if(inputs[i].value != ""){
      i++;
    }else{
      return
    }
  }
  
  if((inputs[4].value === inputs[5].value)){
    for(let gender of genders){
      if(i == 6 && gender.checked){
        const user = {
          fistname: inputs[0].value,
          lastname: inputs[1].value,
          email: inputs[2].value,
          cellphone: inputs[3].value,
          password: inputs[4].value,
          gender: gender.value
        }
        return user
      }
    }   
  }
}

btn.addEventListener('click', async ()=>{
  await addUser(createUser())
})