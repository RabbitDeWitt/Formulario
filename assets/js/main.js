const btn = document.getElementById('btnForm');
const inputs = document.getElementsByTagName('input')
const genders = document.getElementsByClassName('gender')

btn.disabled = true

function verifyForm(){
  let i = 0
  while(i < 6){
    if(inputs[i].value != ""){
      i++;
    }else{
      btnForm.disabled = true
      return
    }
  }
  
  if((inputs[4].value === inputs[5].value)){
    for(let gender of genders){
      if(i == 6 && gender.checked){
        btn.disabled = false
      }
    }   
  }else{
    btn.disabled = true
  }
}


