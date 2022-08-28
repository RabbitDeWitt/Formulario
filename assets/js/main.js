const btn = document.getElementById('btnForm');
const inputs = document.getElementsByTagName('input')
const genders = document.getElementsByClassName('gender')
let i = 0;

btn.addEventListener('click', ()=>{

  while(i < 6){
    if(inputs[i].value != ""){
      i++;
    }else{
      i = 0;
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
        console.log(user)
      }
      
    }
    
  }
  


})
